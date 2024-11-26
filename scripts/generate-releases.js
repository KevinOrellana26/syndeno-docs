import fs from 'fs/promises';
import path from 'path';
import fetch from 'node-fetch';

const GITHUB_TOKEN_CLI = process.env.GITHUB_TOKEN_CLI;
const REPO_OWNER = 'syndeno';
const REPO_NAME = 'syndeno-cli';
const OUTPUT_DIR = './src/content/docs/cli';
const BINARIES_DIR = './public';

async function fetchLatestRelease() {
  const response = await fetch(
    `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/releases/latest`,
    {
      headers: {
        Authorization: `token ${GITHUB_TOKEN_CLI}`,
        Accept: 'application/vnd.github.v3+json',
      },
    }
  );

  return response.json();
}

async function downloadAsset(url, fileName) {
  const response = await fetch(url, {
    headers: {
      Authorization: `token ${GITHUB_TOKEN_CLI}`,
      Accept: 'application/octet-stream',
    },
  });
  
  const buffer = await response.buffer();
  const downloadPath = path.join(BINARIES_DIR, fileName);
  await fs.mkdir(path.join('public'), { recursive: true });
  await fs.writeFile(downloadPath, buffer);
  return `/${fileName}`;
}


async function generateMdContent(release) {
  const assetMap = {};
  for (const asset of release.assets) {
    const url = await downloadAsset(asset.url, asset.name);
    assetMap[asset.name] = url;
  }

  return `---
title: Releases
publishDate: ${release.published_at.split('T')[0]}
tableOfContents: false
---

# ${release.name || release.tag_name}

### MacOS
- [Descargar para MacOS](${assetMap['synctl-darwin-amd64'] || '#'})

### Windows
- [Descargar para Windows](${assetMap['synctl-windows-amd64.exe'] || '#'})

### Linux
- **amd64**: [Descargar para amd64](${assetMap['synctl-linux-amd64'] || '#'})
- **arm32**: [Descargar para arm32](${assetMap['synctl-linux-arm'] || '#'})
- **arm64**: [Descargar para arm64](${assetMap['synctl-linux-arm64'] || '#'})
`;
}

async function main() {
  console.log('All Environment Variables:');
  console.log(JSON.stringify(process.env, null, 2));


  try {
    const release = await fetchLatestRelease();
    await fs.mkdir(OUTPUT_DIR, { recursive: true });
    
    const content = await generateMdContent(release);
    const fileName = `releases.md`;
    await fs.writeFile(path.join(OUTPUT_DIR, fileName), content);
    
    console.log('Successfully generated latest release documentation');
  } catch (error) {
    console.error('Error generating documentation for releases:', error);
    process.exit(1);
  }
}

main();