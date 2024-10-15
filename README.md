
# Block Security

## Proyecto

![](https://github.com/killthmxall/Block-Security/blob/main/assets/imagenes%20readme/proyecto.png?raw=true)

- [x] Revisar la documentación de Eagle Eye Networks
- [ ] Revisar la documentación de Brivo (Falta credenciales a Brivo Access para obtener el access_token)
- [ ] Revisar la documentación de Netbox VM

## Crear una carpeta compartida de Teams en local

### 1. Verificar el nombre de la computadora y el grupo de trabajo

- Presiona Windows y escribe `Acerca de tu PC`

- Selecciona `Configuración avanzada del sistema`

- Sitúate sobre `Nombre del equipo` y verifica:
        
    - Nombre Completo del equipo
    - Grupo de Trabajo

![](https://github.com/killthmxall/Block-Security/blob/main/assets/imagenes%20readme/img1.png?raw=true)

> [!NOTE]
> Para compartir carpetas en red, todos los PCs deben estar en la misma red y en el mismo grupo de trabajo.

### 2. Habilitar el Uso Compartido de archivos

- En el Panel de Control presiona `Redes e Internet`

- Presiona `Centro de redes y recursos compartidos`

- En la parte izquierda presiona sobre `Cambiar configuración de uso compartido avanzado`

![](https://github.com/killthmxall/Block-Security/blob/main/assets/imagenes%20readme/img2.png?raw=true)

- O en configuraciones simplemente busca `Configuración avanzada de uso compartido`

![](https://github.com/killthmxall/Block-Security/blob/main/assets/imagenes%20readme/img3.png?raw=true)

- Asegúrate que `Detección de redes` y `Uso compartido de archivos e impresoras` estén activos:

![](https://github.com/killthmxall/Block-Security/blob/main/assets/imagenes%20readme/img4.png?raw=true)

- Expande `Todas las redes`

- Activa la opción de `Uso compartido de carpetas públicas` y manten desactivada la opción de `Uso compartido protegido con contraseña`

![](https://github.com/killthmxall/Block-Security/blob/main/assets/imagenes%20readme/img5.png?raw=true)

> [!IMPORTANT]
> Si se activa la opción de `Uso compartido protegido con contraseña` será necesario tener el **Usuario** y la **Contraseña** de la computadora a la que se quiere acceder.

### 3. Ajustar las opciones de las carpetas a compartir

- Haz **clic derecho** sobre la carpeta a compartir.

- Selecciona `Conceder acceso a` y selecciona `Usuarios específicos...`

![](https://github.com/killthmxall/Block-Security/blob/main/assets/imagenes%20readme/img6.png?raw=true)

- Expande la barra de búsqueda, selecciona `Everyone` y haz clic en `Agregar`

![](https://github.com/killthmxall/Block-Security/blob/main/assets/imagenes%20readme/img7.png?raw=true)

- Expande el nivel de permiso y selecciona el nivel que desees otorgar al usuario:

![](https://github.com/killthmxall/Block-Security/blob/main/assets/imagenes%20readme/img8.png?raw=true)

- Presiona en Compartir:

![](https://github.com/killthmxall/Block-Security/blob/main/assets/imagenes%20readme/img9.png?raw=true)

---

- Otra vez haz **clic derecho** sobre la carpeta a compartir y selecciona `Propiedades`

- Dirígete a la sección `Compartir` y selecciona `Uso compartido avanzado`

![](https://github.com/killthmxall/Block-Security/blob/main/assets/imagenes%20readme/img10.png?raw=true)

- Habilita la casilla `Compartir esta carpeta` y da clic sobre Aplicar y Aceptar.

![](https://github.com/killthmxall/Block-Security/blob/main/assets/imagenes%20readme/img11.png?raw=true)


### 4. Verificar la carpeta compartida desde otra computadora

- Abre el `Explorador de Archivos` y selecciona `Red`

![](https://github.com/killthmxall/Block-Security/blob/main/assets/imagenes%20readme/img12.png?raw=true)

- Deberá aparecer el Equipo configurado que comparte la carpeta:

![](https://github.com/killthmxall/Block-Security/blob/main/assets/imagenes%20readme/img13.png?raw=true)

---

### No aparece la computadora con las carpetas compartidas

Este problema suele aparecer cuando no se habilita el `Soporte para Compartir Archivos`

- Presiona Windows y busca `Activar o Desactivar características de Windows`

- Habilita la casilla `Compatibilidad con el protocolo para compartir archivos SMB 1.0/CIFS`

- Expande la casilla y habilita las demás casillas:

![](https://github.com/killthmxall/Block-Security/blob/main/assets/imagenes%20readme/img14.png?raw=true)

- Reinicia el Equipo
