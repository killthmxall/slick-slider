
# Block Security

## Crear una carpeta compartida de Teams en local

### 1. Verificar el nombre de la computadora y el grupo de trabajo

- Presiona Windows y escribe `Acerca de tu PC`

- Selecciona `Configuración avanzada del sistema`

- Sitúate sobre `Nombre del equipo` y verifica:
        
    - Nombre Completo del equipo
    - Grupo de Trabajo

![](img1)

> [!NOTE]
> Para compartir carpetas en red, todos los PCs deben estar en la misma red y en el mismo grupo de trabajo.

### 2. Habilitar el Uso Compartido de archivos

- En el Panel de Control presiona `Redes e Internet`

- Presiona `Centro de redes y recursos compartidos`

- En la parte izquierda presiona sobre `Cambiar configuración de uso compartido avanzado`

![](img2)

- O en configuraciones simplemente busca `Configuración avanzada de uso compartido`

![](img3)

- Asegúrate que `Detección de redes` y `Uso compartido de archivos e impresoras` estén activos:

![](img4)

- Expande `Todas las redes`

- Activa la opción de `Uso compartido de carpetas públicas` y manten desactivada la opción de `Uso compartido protegido con contraseña`

> [!IMPORTANT]
> Si se activa la opción de `Uso compartido protegido con contraseña` será necesario tener el **Usuario** y la **Contraseña** de la computadora a la que se quiere acceder.

### 3. Ajustar las opciones de las carpetas a compartir

- Haz **clic derecho** sobre la carpeta a compartir.

- Selecciona `Conceder acceso a` y selecciona `Usuarios específicos...`

![](img5)

- Expande la barra de búsqueda, selecciona `Everyone` y haz clic en `Agregar`

![](img6)

- Expande el nivel de permiso y selecciona el nivel que desees otorgar al usuario:

![](img7)

- Otra vez haz **clic derecho** sobre la carpeta a compartir y selecciona `Propiedades`

- Dirígete a la sección `Compartir` y selecciona `Uso compartido avanzado`

![](img8)

- Habilita la casilla `Compartir esta carpeta` y da clic sobre Aplicar y Aceptar.

![](img9)


### 4. Verificar la carpeta compartida desde otra computadora

- Abre el `Explorador de Archivos` y selecciona `Red`

- Deberá aparecer el Equipo configurado que comparte la carpeta:

![](img10)

### No aparece la computadora con las carpetas compartidas

Este problema suele aparecer cuando no se habilita el `Soporte para Compartir Archivos`

- Presiona Windows y busca `Activar o Desactivar características de Windows`

- Habilita la casilla `Compatibilidad con el protocolo para compartir archivos SMB 1.0/CIFS`

- Expande la casilla y habilita las demás casillas:

![](img11)

- Reinicia el Equipo
