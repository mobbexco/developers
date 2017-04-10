---
layout: post
title: WebCheckout
description: Cómo crear un checkout utilizando Mobbex
image: null
---

Para crear un checkout es necesario poseer un API Key y un Access Token. Para obtenerlos se deben seguir los siguientes pasos

1) Ingresar a https://mobbex.com/console<br/>
2) Dirigirse desde el menú superior a "Desarrollador"<br/>
3) Crear una nueva aplicación o utilizar una existente<br/>
4) Obtener el acceso a una Entidad mediante la opción "Solicitar Acceso" o utilizar un acceso ya concedido mostrado en el listado de "Entidades Autorizadas"<br/>

Habiendo obtenido ambos keys se puede proceder a generar la solicitud para crear un Checkout. Algunos ejemplos a continuación.

#### Cabeceras (Headers)
- ___x-api-key___: Clave API de su aplicación<br/>
- ___x-access-token___: Token de Acceso a la entidad para la cual desea realizar la operación.<br/>

#### Parametros (POST Params)

__Requeridos__<br/>
- ___total___ (Número: XXX.xx) Monto de la operación. Formato XXX.xx donde el ___PUNTO___ es el separador decimal.<br/>
- ___description___ (Texto hasta 255 caracteres) Descripción de la operación que será mostrada en el Checkout.<br/>
- ___return_url___ (FQDN) URL para retornar una vez finalizada la operación o si el usuario desea cancelar la misma.<br/>
- ___reference___ (Texto) Es una referencia que no será mostrada pero que le será útil para reconocer la operación en su sistema.<br/>

__Opcionales__<br/>
- ___webhook___ (FQDN compatible con POST) URL que será invocada por Mobbex al finalizar la operación mediante __POST__ y que recibirá todos los detalles sobre la operación procesada. El Webhook será invocado antes de realizarse la redirección. Tenga en cuenta que la URL utilizada debe ser capaz de recibir una llamada de Tipo POST de lo contrario Mobbex no será capaz de informarle sobre la misma.<br/>
- ___redirect___ (Boolean: true/false) permite la redirección automática al checkout al terminar la ejecución del POST sin intervención del usuario. (Por defecto es falso y siempre retorna la URL )<br/>

__CURL__
<pre><code class="bash">
curl --request POST \
  --url https://mobbex.com/p/checkout/create \
  --header 'cache-control: no-cache' \
  --header 'content-type: multipart/form-data; \
  --header 'x-api-key: zJ8LFTBX6Ba8D611e9io13fDZAwj0QmKO1Hn1yIj' \
  --header 'x-access-token: d31f0721-2f85-44e7-bcc6-15e19d1a53cc' \
  --form total=100 \
  --form 'reference=#MyImportantID' \
  --form 'description=Some Description' \
  --form return_url=https://mobbex.com/finished
</code></pre>

__Javascript__
<pre><code>
var data = new FormData();
data.append("total", "100");
data.append("reference", "#MyImportantID");
data.append("description", "Some Description");
data.append("return_url", "https://mobbex.com/finished");
var xhr = new XMLHttpRequest();
xhr.withCredentials = true;
xhr.addEventListener("readystatechange", function () {
  if (this.readyState === 4) {
    console.log(this.responseText);
  }
});
xhr.open("POST", "https://mobbex.com/p/checkout/create");
xhr.setRequestHeader("x-api-key", "zJ8LFTBX6Ba8D611e9io13fDZAwj0QmKO1Hn1yIj");
xhr.setRequestHeader("x-access-token", "d31f0721-2f85-44e7-bcc6-15e19d1a53cc");
xhr.setRequestHeader("cache-control", "no-cache");
xhr.send(data);
</code></pre>

__PHP__
<pre><code>
<?php  
$request = new HttpRequest();
$request->setUrl('https://mobbex.com/p/checkout/create');
$request->setMethod(HTTP_METH_POST);  
$request->setHeaders(array(
  'postman-token' => '4533ef25-f802-5fcc-cc03-8cc45e14d3c6',
  'cache-control' => 'no-cache',
  'content-type' => 'application/x-www-form-urlencoded',
  'x-access-token' => 'd31f0721-2f85-44e7-bcc6-15e19d1a53cc',
  'x-api-key' => 'zJ8LFTBX6Ba8D611e9io13fDZAwj0QmKO1Hn1yIj'
));  
$request->setContentType('application/x-www-form-urlencoded');
$request->setPostFields(array(
  'total' => '100',
  'reference' => '#MyImportantID',
  'description' => 'Some Description',
  'return_url' => 'https://mobbex.com/finished'
));  
try {
  $response = $request->send();    
  echo $response->getBody();
} catch (HttpException $ex) {
  echo $ex;
}
</code></pre>

#### Respuesta: 

Tenga en cuenta que las respuestas del servicio siempre serán en formato JSON. El servicio sólo contestará si __redirect__ no fue utilizado o si el mismo se colocó en "false"

__JSON__
<pre><code>
{
  "result": true,
  "data": {
    "id": "rytPr_gSe",
    "url": "https://mobbex.com/p/checkout/view/rytPr_gSe",
    "description": "Some Description",
    "total": 100
  }
}
</code></pre>

**Importante**  
Si no se provee el parámetro "redirect" como true, como desarrollador deberá redireccionar el sitio web a la url proporcionada en la respuesta de nuestro servicio. Si Redirect es "true" será redireccionado automáticamente.

#### Transacción finalizada/cancelada

Si se define el parámetro ```return_url``` el servicio redireccionará a la URL provista mediante HTTP Get, a esta url se le agregará el Estado de la misma mediante el parámetro ```status``` y el tipo de transacción generada por el usuario mediante el parámetro ```type``` (cash/card).

Ejemplo:
```https://mobbex.com/thank_you?status=200&type=cash```


**Casos especiales**  
Si el usuario cancela la operación ```status``` será ```0``` y ```type``` será ```none```. Esto como se señala indica que el usuario no finalizó la operación y decidió volver al sitio.

Ejemplo:
```https://mobbex.com/thank_you?status=0&type=none```

Referencia de los Estados posibles: <a href="{{ "statuses" | absolute_url }}">Estados y Tipos de Transacción</a>. Es ***muy importante*** revisar la documentación sobre estados y tipos de documentación ya que el manejo de los mismos será utilizado durante la homologación del comercio.