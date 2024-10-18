---
title: ¿Cómo renovar los certificados?
tableOfContents: true
---

Aquí encontrarás información sobre cómo funciona **cert-manager**, la configuración de autoridades certificadoras (CA) y la renovación automática de certificados. Además, se abordan conceptos clave como **TLS**, el uso de CA, y la integración con proveedores de servicios como **Let's Encrypt**.

### Cert-Manager
Es una herramienta de código abierto para Kuberntes que automatiza la emisión y renovación de certificados TLS para tus aplicaciones. Su principal función es emitir y renovar certificados antes de que expiren, garantizando la continuidad de la seguridad sin intervención manual.

### ¿Qué es una CA?
Una **Autoridad Certificadora (CA)** es una entidad de confianza que emite certificados, validando que una clave pública pertenece a una organización o servicio específico. **Cert-manager** permite utilizar una **CA interna** o conectarse a una **CA externa**, como **Let's Encrypt**, para la emisión de certificados.

### ¿Qué es TLS?
**Transport Layer Security (TLS)** es un protocolo criptográfico que asegura la comunicación entre dos dispositivos en una red, garantizando que los datos estén cifrados y autenticados. Es fundamental para proteger la integridad y privacidad de la información en internet, como en las conexiones HTTPS.

### Let's Encrypt y Certificación Automatizada
En Kubernetes, utilizamos **Let's Encrypt**, una CA gratuita y automatizada, para emitir certificados SSL/TLS. **Cert-manager** interactúa con el **protocolo ACME** para automatizar la obtención y renovación de certificados sin intervención manual.

#### Protocolo ACME
El **protocolo ACME (Automatic Certificate Management Environment)** automatiza la emisión y renovación de certificados SSL/TLS.

#### Funcionamiento de ACME con Let's Encrypt

1. El cliente **(como certbot)** solicita un certificado al servidor ACME.
2. El servidor ACME valida el control del dominio **(HTTP-01 o DNS-01)**.
3. Una vez validado, Let's Encrypt emite el certificado y lo envía al cliente.
4. La renovación automática se realiza cada 60-90 días para garantizar la seguridad continua.

:::note
Además, contamos con sistemas de alertas que notifican cuando un certificado está próximo a expirar, permitiendo tomar medidas preventivas si fuera necesario. Sin embargo, el clúster renovará automáticamente los certificados antes de su vencimiento.
:::