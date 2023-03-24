import React from 'react';
import { motion } from 'framer-motion';
import './docs.modules.scss';
import GoToDocs from '../../../components/GoToDocs';
import CustomCursor from '../../../components/CustomCursor';

const HTML = () => {
  return (
    <motion.div
      className='max-w-7xl m-auto px-2 md:px-8 w-full min-h-screen mt-40 mb-32 relative'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}>
      {/* Custom cursor */}
      <CustomCursor></CustomCursor>

      {/* Lights */}
      <motion.div
        className='absolute  -translate-x-1/2 shadow-[0px_0px_300px_50px_#0ea5e9]'
        animate={{
          x: [30, -20, 20, -30],
          y: [30, -20, 20, -30],
          rotate: [0, 90],
          scale: [1, 1.2, 1.2, 1]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: 'reverse'
        }}></motion.div>
      <motion.div
        className='absolute  left-full -translate-x-1/2 top-[100vh]  shadow-[0px_0px_300px_50px_#0ea5e9]'
        animate={{
          x: [30, -20, 20, -30],
          y: [30, -20, 20, -30],
          rotate: [0, 90],
          scale: [1, 1.2, 1.2, 1]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: 'reverse'
        }}></motion.div>
      <motion.div
        className='absolute  -translate-x-1/2 top-full  shadow-[0px_0px_300px_50px_#0ea5e9]'
        animate={{
          x: [30, -20, 20, -30],
          y: [30, -20, 20, -30],
          rotate: [0, 90],
          scale: [1, 1.2, 1.2, 1]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: 'reverse'
        }}></motion.div>

      {/* Docs */}
      <div className='rounded-xl docStyle w-full px-2 md:px-8 lg:px-16 py-8 bg-gradient-to-r  from-slate-900 to-slate-800 ring-0'>
        <GoToDocs></GoToDocs>
        <h1>HTML</h1>
        <p>
          HTML es un lenguaje de marcado utilizado para crear páginas web y
          definir su estructura y contenido. Con él, se pueden incorporar
          diferentes elementos como texto, imágenes, videos, formularios y
          otros elementos multimedia. Es fundamental para el desarrollo de
          páginas web y es la base para otros lenguajes de programación web
          como CSS y JavaScript.
        </p>

        <h2>Estructura básica de una página HTML</h2>
        <pre>
          <code>
            &lt;!DOCTYPE html&gt; <br></br>
            &lt;html&gt; <br></br>
            {'    '}&lt;head&gt; <br></br>
            {'    '}
            {'    '}&lt;title&gt;Título de la página&lt;/title&gt;{' '}
            <br></br>
            {'    '}&lt;/head&gt; <br></br>
            {'    '}&lt;body&gt; <br></br>
            {'    '}
            {'    '}Contenido de la página <br></br>
            {'    '}&lt;/body&gt; <br></br>
            &lt;/html&gt; <br></br>
          </code>
        </pre>
        <p>
          <code>&lt;!DOCTYPE html&gt;</code> indica que se está utilizando
          HTML5.
        </p>
        <p>
          <code>&lt;html&gt;</code> indica el comienzo del documento HTML.
        </p>
        <p>
          <code>&lt;head&gt;</code> contiene información sobre el
          documento, como el título de la página y enlaces a archivos CSS y
          JavaScript.
        </p>
        <p>
          <code>&lt;title&gt;</code> especifica el título de la página.
        </p>
        <p>
          <code>&lt;body&gt;</code> contiene el contenido visible de la
          página.
        </p>

        <h2>Elementos HTML</h2>
        <p>
          Los elementos HTML se utilizan para definir la estructura y el
          contenido de una página web.
        </p>
        <pre>
          <code>
            &lt;h1&gt;Este es un encabezado de nivel 1&lt;/h1&gt; <br></br>
            &lt;p&gt;Este es un párrafo de texto.&lt;/p&gt; <br></br>
            &lt;ul&gt; <br></br>
            &lt;li&gt;Elemento de lista 1&lt;/li&gt; <br></br>
            &lt;li&gt;Elemento de lista 2&lt;/li&gt; <br></br>
            &lt;/ul&gt; <br></br>
            &lt;a href="https://www.ejemplo.com"&gt;Este es un enlace a
            www.ejemplo.com&lt;/a&gt; <br></br>
            &lt;img src="ruta/a/la/imagen.jpg" alt="Texto alternativo"&gt;{' '}
            <br></br>
          </code>
        </pre>
        <p>
          <code>&lt;h1&gt;</code> a <code>&lt;h6&gt;</code> se utilizan
          para los encabezados.
        </p>
        <p>
          <code>&lt;p&gt;</code> se utiliza para los párrafos.
        </p>
        <p>
          <code>&lt;ul&gt;</code> y <code>&lt;ol&gt;</code> se utilizan
          para crear listas.
        </p>
        <p>
          <code>&lt;li&gt;</code> se utiliza para cada elemento de la
          lista.
        </p>
        <p>
          <code>&lt;a&gt;</code> se utiliza para crear enlaces.
        </p>
        <p>
          <code>&lt;img&gt;</code> se utiliza para insertar imágenes en la
          página.
        </p>

        <h2>Atributos HTML</h2>
        <p>
          Los atributos HTML se utilizan para proporcionar información
          adicional sobre un elemento.
        </p>
        <pre>
          <code>
            &lt;a href="https://www.ejemplo.com"&gt;Este es un enlace a
            www.ejemplo.com&lt;/a&gt; <br></br>
            &lt;img src="ruta/a/la/imagen.jpg" alt="Texto alternativo"&gt;{' '}
            <br></br>
          </code>
        </pre>
        <p>
          <code>href</code> se utiliza en <code>&lt;a&gt;</code> para
          especificar la URL de destino del enlace.
        </p>
        <p>
          <code>src</code> se utiliza en <code>&lt;img&gt;</code> para
          especificar la URL de la imagen que se va a mostrar.
        </p>
        <p>
          <code>alt</code> se utiliza en <code>&lt;img&gt;</code> para
          proporcionar un texto alternativo en caso de que la imagen no se
          pueda mostrar.
        </p>

        <h2>Comentarios HTML</h2>
        <p>
          Los comentarios HTML se utilizan para agregar notas o
          explicaciones dentro del código HTML que no se mostrarán en la
          página web.
        </p>
        <pre>
          <code>&lt;!-- Este es un comentario HTML --&gt;</code>
        </pre>
        <p>
          Los comentarios HTML comienzan con <code>&lt;!--</code> y
          terminan con <code>--&gt;</code>.
        </p>

        <h2>Formularios HTML</h2>
        <p>
          Los formularios HTML se utilizan para recopilar información de
          los usuarios de una página web.
        </p>
        <pre>
          <code>
            &lt;form&gt; <br></br>
            {'    '}&lt;input type="text" id="nombre" name="nombre"&gt;{' '}
            <br></br>
            {'    '}&lt;br&gt; <br></br>
            {'    '}&lt;label for="correo"&gt;Correo
            electrónico:&lt;/label&gt; <br></br>
            {'    '}&lt;input type="email" id="correo" name="correo"&gt;{' '}
            <br></br>
            {'    '}&lt;br&gt; <br></br>
            {'    '}&lt;label for="nombre"&gt;Nombre:&lt;/label&gt;{' '}
            <br></br>
            {'    '}&lt;label for="mensaje"&gt;Mensaje:&lt;/label&gt;{' '}
            <br></br>
            {'    '}&lt;textarea id="mensaje"
            name="mensaje"&gt;&lt;/textarea&gt; <br></br>
            {'    '}&lt;br&gt; <br></br>
            {'    '}&lt;input type="submit" value="Enviar"&gt; <br></br>
            &lt;/form&gt; <br></br>
          </code>
        </pre>
        <p>
          <code>&lt;form&gt;</code> se utiliza para crear un formulario.
        </p>
        <p>
          <code>&lt;label&gt;</code> se utiliza para etiquetar un elemento
          de formulario.
        </p>
        <p>
          <code>&lt;input&gt;</code> se utiliza para crear elementos de
          formulario, como campos de texto y botones.
        </p>
        <p>
          <code>&lt;textarea&gt;</code> se utiliza para crear áreas de
          texto para que los usuarios puedan escribir mensajes más largos.
        </p>
        <p>
          <code>&lt;submit&gt;</code> se utiliza para crear botones de
          envío.
        </p>

        <h2>Conclusión</h2>
        <p>
          En conclusión, HTML es el lenguaje fundamental utilizado para
          crear y diseñar páginas web. Con HTML, puedes agregar contenido
          de texto, imágenes, videos y otros tipos de elementos a tu sitio
          web. Además, HTML es un lenguaje fácil de aprender y se utiliza
          en combinación con otros lenguajes como CSS y JavaScript para
          crear sitios web atractivos e interactivos. Espero que esta
          documentación te haya sido útil para comprender mejor los
          conceptos básicos de HTML y comenzar a construir tus propios
          sitios web.
        </p>

        <h2>Recursos adicionales</h2>
        <p>
          Hay muchos recursos disponibles para aprender más sobre HTML.
          Aquí hay algunos que te pueden resultar útiles:
        </p>
        <ul>
          <li>
            <a target={'_blank'} href='https://www.w3schools.com/html/'>
              W3Schools
            </a>
            : Este sitio web ofrece una guía completa y detallada de HTML,
            con muchos ejemplos y ejercicios prácticos.
          </li>
          <li>
            <a
              target={'_blank'}
              href='https://developer.mozilla.org/en-US/docs/Learn/HTML'>
              MDN Web Docs
            </a>
            : Este recurso proporciona una guía completa y actualizada de
            HTML, junto con información detallada sobre cada etiqueta y
            atributo.
          </li>
          <li>
            <a target={'_blank'} href='https://htmlreference.io/'>
              HTML Reference
            </a>
            : Este sitio web es una referencia completa de HTML, con
            información detallada sobre cada etiqueta y atributo.
          </li>
          <li>
            <a target={'_blank'} href='https://codepen.io/'>
              CodePen
            </a>
            : Este sitio web es una comunidad de desarrolladores donde
            puedes encontrar ejemplos de código HTML y CSS, así como
            inspiración para tus proyectos.
          </li>
        </ul>
        <p>
          Con estos recursos adicionales, podrás aprender más sobre HTML y
          convertirte en un desarrollador web más habilidoso.
        </p>
      </div>
    </motion.div>
  );
};

export default HTML;
