---
layout: post
title: Transacciones
description: Cómo obtener detalles de una Transacción mediante su Referencia
image: null
---

A la hora de crear una transacción Mobbex solicita que se provea una Referencia interna que permite dar seguimiento a la transacción. Este dato además de ser útil para Mobbex para evitar sobre cargos a sus clientes también permite generar trazabilidad sobre la misma con lo cual usted puede mediante la referencia obtener detalles sobre la transacción requerida.

Para acceder a estos endpoints deberá poseer su API Key y API Token.

{% include devaccount.html %}

#### Cabeceras (Headers)
- ___x-api-key___: Clave API de su aplicación<br/>
- ___x-access-token___: Token de Acceso a la entidad para la cual desea realizar la operación.<br/>

***Transacciones***  

La URL de transacciones listará todas las transacciones generadas para el pago solicitado mediante la referencia junto con sus estados.

URL: ```https://api.mobbex.com/2.0/transactions/coupons/{reference}```

#### Parametros (GET Params)

__Requeridos__<br/>
- ___reference___ Referencia de la factura o pago solicitado.<br/>

__CURL__
<pre><code class="bash">
curl --request GET \
  --url https://api.mobbex.com/2.0/transactions/coupons/mi_referencia_0101 \
  --header 'cache-control: no-cache' \
  --header 'x-api-key: zJ8LFTBX6Ba8D611e9io13fDZAwj0QmKO1Hn1yIj' \
  --header 'x-access-token: d31f0721-2f85-44e7-bcc6-15e19d1a53cc'
</code></pre>

__Javascript__
<pre><code>
var xhr = new XMLHttpRequest();
xhr.withCredentials = true;
xhr.addEventListener("readystatechange", function () {
  if (this.readyState === 4) {
    console.log(this.responseText);
  }
});
xhr.open("GET", "https://api.mobbex.com/2.0/transactions/coupons/mi_referencia_0101");
xhr.setRequestHeader("x-api-key", "zJ8LFTBX6Ba8D611e9io13fDZAwj0QmKO1Hn1yIj");
xhr.setRequestHeader("x-access-token", "d31f0721-2f85-44e7-bcc6-15e19d1a53cc");
xhr.setRequestHeader("cache-control", "no-cache");
xhr.send();
</code></pre>

__PHP__
<pre><code>
<?php  
$request = new HttpRequest();
$request->setUrl('https://api.mobbex.com/2.0/transactions/coupons/mi_referencia_0101');
$request->setMethod(HTTP_METH_GET);  
$request->setHeaders(array(
  'cache-control' => 'no-cache',
  'content-type' => 'application/x-www-form-urlencoded',
  'x-access-token' => 'd31f0721-2f85-44e7-bcc6-15e19d1a53cc',
  'x-api-key' => 'zJ8LFTBX6Ba8D611e9io13fDZAwj0QmKO1Hn1yIj'
));  
try {
  $response = $request->send();    
  echo $response->getBody();
} catch (HttpException $ex) {
  echo $ex;
}
</code></pre>

***Transacción***  

La URL actual le permitirá obtener todos los detalles de una transacción específica.

URL: ```https://api.mobbex.com/2.0/transactions/coupon/status```

#### Parametros (POST Params)

__Requeridos__<br/>
- ___id___ Identificador del cupón a solicitar.<br/>

__CURL__
<pre><code class="bash">
curl --request POST \
  --url https://api.mobbex.com/2.0/transactions/coupon/status \
  --header 'cache-control: no-cache' \
  --header 'content-type: multipart/form-data; \
  --header 'x-api-key: zJ8LFTBX6Ba8D611e9io13fDZAwj0QmKO1Hn1yIj' \
  --header 'x-access-token: d31f0721-2f85-44e7-bcc6-15e19d1a53cc' \
  --form 'id=#MyImportantID'
</code></pre>

__Javascript__
<pre><code>
var data = new FormData();
data.append("id", "#MyImportantID");
var xhr = new XMLHttpRequest();
xhr.withCredentials = true;
xhr.addEventListener("readystatechange", function () {
  if (this.readyState === 4) {
    console.log(this.responseText);
  }
});
xhr.open("POST", "https://api.mobbex.com/2.0/transactions/coupon/status");
xhr.setRequestHeader("x-api-key", "zJ8LFTBX6Ba8D611e9io13fDZAwj0QmKO1Hn1yIj");
xhr.setRequestHeader("x-access-token", "d31f0721-2f85-44e7-bcc6-15e19d1a53cc");
xhr.setRequestHeader("cache-control", "no-cache");
xhr.send(data);
</code></pre>

__PHP__
<pre><code>
<?php  
$request = new HttpRequest();
$request->setUrl('https://api.mobbex.com/2.0/transactions/coupon/status');
$request->setMethod(HTTP_METH_POST);  
$request->setHeaders(array(
  'cache-control' => 'no-cache',
  'content-type' => 'application/x-www-form-urlencoded',
  'x-access-token' => 'd31f0721-2f85-44e7-bcc6-15e19d1a53cc',
  'x-api-key' => 'zJ8LFTBX6Ba8D611e9io13fDZAwj0QmKO1Hn1yIj'
));  
$request->setContentType('application/x-www-form-urlencoded');
$request->setPostFields(array(
  'id' => '#MyImportantID'
));  
try {
  $response = $request->send();    
  echo $response->getBody();
} catch (HttpException $ex) {
  echo $ex;
}
</code></pre>

Referencia de los Estados posibles: <a href="{{ "statuses" | absolute_url }}">Estados y Tipos de Transacción</a>. Es ***muy importante*** revisar la documentación sobre estados y tipos de documentación ya que el manejo de los mismos será utilizado durante la homologación del comercio.