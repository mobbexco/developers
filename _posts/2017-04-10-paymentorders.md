---
layout: post
title: Ordenes de Pago
description: Crea órdenes de pago desde tu servicio
image: null
---

<div markdown="1">
Para crear una Orden de Pago es necesario poseer un API Key y un Access Token. Para obtenerlos se deben seguir los siguientes pasos

1) Ingresar a https://mobbex.com/console<br/>
2) Dirigirse desde el menú superior a "Desarrollador"<br/>
3) Crear una nueva aplicación o utilizar una existente<br/>
4) Obtener el acceso a una Entidad mediante la opción "Solicitar Acceso" o utilizar un acceso ya concedido mostrado en el listado de "Entidades Autorizadas"<br/>

Habiendo obtenido ambos keys se puede proceder a generar la solicitud para crear una Orden de Pago. Algunos ejemplos a continuación.

#### URL
```
https://mobbex.com/p/payment_order/create
```

#### Cabeceras (Headers)
- ___x-api-key___: Clave API de su aplicación
- ___x-access-token___: Token de Acceso a la entidad para la cual desea realizar la operación.

#### Parametros (POST Params)

_Requeridos_<br/>
- ___total___: Monto de la operación. Formato XXX.xx donde el ___PUNTO___ es el separador decimal.<br/>
- ___description___: Descripción de la operación que será mostrada en el Checkout.<br/>
- ___email___: El email al cual será enviada la orden de pago generada.<br/>

_Opcionales_<br/>
- ___capture___: este parámetro permite generar una orden de pago en modo Autorización, las ordenes de pago del tipo Autorización deberán ser capturadas desde el panel administrativo. (Defecto: true)<br/>

__CURL__
<pre><code class="bash">
curl --request POST \
  --url https://mobbex.com/p/payment_order/create \
  --header 'cache-control: no-cache' \
  --header 'content-type: multipart/form-data; \
  --header 'x-api-key: zJ8LFTBX6Ba8D611e9io13fDZAwj0QmKO1Hn1yIj' \
  --header 'x-access-token: d31f0721-2f85-44e7-bcc6-15e19d1a53cc' \
  --form total=100 \
  --form 'email=some@email.com' \
  --form 'description=Some Description'
</code></pre>

__Javascript__
<pre><code>
var data = new FormData();
data.append("total", "100");
data.append("email", "some@email.com");
data.append("description", "Some Description");
var xhr = new XMLHttpRequest();
xhr.withCredentials = true;
xhr.addEventListener("readystatechange", function () {
  if (this.readyState === 4) {
    console.log(this.responseText);
  }
});
xhr.open("POST", "https://mobbex.com/p/payment_order/create");
xhr.setRequestHeader("x-api-key", "zJ8LFTBX6Ba8D611e9io13fDZAwj0QmKO1Hn1yIj");
xhr.setRequestHeader("x-access-token", "d31f0721-2f85-44e7-bcc6-15e19d1a53cc");
xhr.setRequestHeader("cache-control", "no-cache");
xhr.send(data);
</code></pre>

__PHP__
<pre><code>
<?php  
$request = new HttpRequest();
$request->setUrl('https://mobbex.com/p/payment_order/create');
$request->setMethod(HTTP_METH_POST);  
$request->setHeaders(array(
  'cache-control' => 'no-cache',
  'content-type' => 'application/x-www-form-urlencoded',
  'x-access-token' => 'd31f0721-2f85-44e7-bcc6-15e19d1a53cc',
  'x-api-key' => 'zJ8LFTBX6Ba8D611e9io13fDZAwj0QmKO1Hn1yIj'
));  
$request->setContentType('application/x-www-form-urlencoded');
$request->setPostFields(array(
  'total' => '100',
  'email' => 'some@email.com',
  'description' => 'Some Description'
));  
try {
  $response = $request->send();    
  echo $response->getBody();
} catch (HttpException $ex) {
  echo $ex;
}
</code></pre>

#### Respuesta: 

Tenga en cuenta que las respuestas del servicio siempre serán en formato JSON.

__JSON__
<pre><code>
{
  "__v": 0,
  "identifier": "some-description",
  "updated": "2016-12-28T00:15:54.380Z",
  "created": "2016-12-28T00:15:54.380Z",
  "email": "admin@mobbex.com",
  "description": "Some Description",
  "amount": 100,
  "entity": "5761a3dd8aad6c120042b287",
  "capture": true,
  "uid": "SJMHEKxSl",
  "_id": "5863043abfa789000f941f58"
}
</code></pre>
</div>