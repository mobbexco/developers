---
layout: post
title: API Pública
description: Utiliza nuestra API Pública para acceder a nuestro servicio a bajo nivel (AVANZADO)
image: null
---

<body class="preload">
<div class="container"><div class="row"><nav><div class="resource-group"><div class="heading"><div class="chevron"><i class="open fa fa-angle-down"></i></div><a href="#entities">Entities</a></div><div class="collapse-content"><ul><li><a href="#entities-post"><span class="badge post"><i class="icon fa-plus"></i></span>POST /2.0/entities/validate</a></li><li><a href="#entities-post-1"><span class="badge post"><i class="icon fa-plus"></i></span>POST /2.0/entities/create</a></li></ul></div></div><div class="resource-group"><div class="heading"><div class="chevron"><i class="open fa fa-angle-down"></i></div><a href="#general">General</a></div><div class="collapse-content"><ul><li><a href="#general-get"><span class="badge get"><i class="fa fa-arrow-down"></i></span>GET /2.0/countries/all</a></li><li><a href="#general-get-1"><span class="badge get"><i class="fa fa-arrow-down"></i></span>GET /2.0/currency/all</a></li><li><a href="#general-get-2"><span class="badge get"><i class="fa fa-arrow-down"></i></span>GET /2.0/categories/all</a></li><li><a href="#general-get-3"><span class="badge get"><i class="fa fa-arrow-down"></i></span>GET /2.0/states/all</a></li><li><a href="#general-get-4"><span class="badge get"><i class="fa fa-arrow-down"></i></span>GET /2.0/cities/all</a></li><li><a href="#general-get-5"><span class="badge get"><i class="fa fa-arrow-down"></i></span>GET /2.0/sources/country/ARG</a></li></ul></div></div><div class="resource-group"><div class="heading"><div class="chevron"><i class="open fa fa-angle-down"></i></div><a href="#sources">Sources</a></div><div class="collapse-content"><ul><li><a href="#sources-post"><span class="badge post"><i class="icon fa-plus"></i></span>POST /2.0/sources/entity</a></li><li><a href="#sources-post-1"><span class="badge post"><i class="icon fa-plus"></i></span>POST /2.0/sources/calculate</a></li><li><a href="#sources-post-2"><span class="badge post"><i class="icon fa-plus"></i></span>POST /2.0/sources/token</a></li><li><a href="#sources-post-3"><span class="badge post"><i class="icon fa-plus"></i></span>POST /2.0/sources/token</a></li></ul></div></div><div class="resource-group"><div class="heading"><div class="chevron"><i class="open fa fa-angle-down"></i></div><a href="#transaction">Transaction</a></div><div class="collapse-content"><ul><li><a href="#transaction-post"><span class="badge post"><i class="icon fa-plus"></i></span>POST /2.0/transaction/payment</a></li></ul></div></div><div class="resource-group"><div class="heading"><div class="chevron"><i class="open fa fa-angle-down"></i></div><a href="#transactions">Transactions</a></div><div class="collapse-content"><ul><li><a href="#transactions-post"><span class="badge post"><i class="icon fa-plus"></i></span>POST /2.0/transactions/status</a></li></ul></div></div><p style="text-align: center; word-wrap: break-word;"><a href="https://api.mobbex.com">https://api.mobbex.com</a></p></nav><div class="content"><header><h1 id="top">Mobbex</h1></header><section id="entities" class="resource-group"><h2 class="group-heading">Entities <a href="#entities" class="permalink">&para;</a></h2><div id="entities-" class="resource"><h3 class="resource-heading">Resource <a href="#entities-" class="permalink">&nbsp;&para;</a></h3><div id="entities-post" class="action post"><h4 class="action-heading"><div class="name"></div><a href="#entities-post" class="method post">POST</a><code class="uri">/2.0/entities/validate</code></h4><p>Given an email, country code and tax id (valid in that countr), valides the entity against the corresponding Tax authorities</p>
<h4>Example URI</h4><div class="definition"><span class="method post">POST</span>&nbsp;<span class="uri"><span class="hostname">https://api.mobbex.com</span>/2.0/entities/validate</span></div><div class="title"><strong>Request</strong>
<br/></div><div class="collapse-content"><div class="inner"><h5>Headers</h5><pre><code><span class="hljs-attribute">x-api-key</span>: <span class="hljs-string">CKlmn34BdsatbkpqerIRCkh38KHeihicsa113DFKBC,</span><br><span class="hljs-attribute">x-device-guid</span>: <span class="hljs-string">e12e01a9-1a38-45d1-8a90-dd1af52fb13a</span><br><span class="hljs-attribute">Content-Type</span>: <span class="hljs-string">application/json</span></code></pre><div style="height: 1px;"></div><h5>Body</h5><pre><code>{
  "<span class="hljs-attribute">country</span>": <span class="hljs-value"><span class="hljs-string">"arg"</span></span>,
  "<span class="hljs-attribute">email</span>": <span class="hljs-value"><span class="hljs-string">"jdoe@gmail.com"</span></span>,
  "<span class="hljs-attribute">tax_id</span>": <span class="hljs-value"><span class="hljs-string">"23226750339"</span>
</span>}</code></pre><div style="height: 1px;"></div></div></div><div class="title"><strong>Response&nbsp;&nbsp;<code>200</code></strong><br/></div><div class="collapse-content"><div class="inner"><h5>Headers</h5><pre><code><span class="hljs-attribute">vary</span>: <span class="hljs-string">X-HTTP-Method-Override, Accept-Encoding</span><br><span class="hljs-attribute">access-control-allow-origin</span>: <span class="hljs-string">*</span><br><span class="hljs-attribute">content-type</span>: <span class="hljs-string">application/json; charset=utf-8</span><br><span class="hljs-attribute">date</span>: <span class="hljs-string">Fri, 09 Dec 2016 19:35:52 GMT</span></code></pre><div style="height: 1px;"></div><h5>Body</h5><pre><code>{
  "<span class="hljs-attribute">result</span>": <span class="hljs-value"><span class="hljs-literal">true</span></span>,
  "<span class="hljs-attribute">data</span>": <span class="hljs-value">[
    {
      "<span class="hljs-attribute">label</span>": <span class="hljs-value"><span class="hljs-string">"Nombre"</span></span>,
      "<span class="hljs-attribute">value</span>": <span class="hljs-value"><span class="hljs-string">"Fernandez Piano ALEJANDRO"</span>
    </span>},
    {
      "<span class="hljs-attribute">label</span>": <span class="hljs-value"><span class="hljs-string">"CUIT"</span></span>,
      "<span class="hljs-attribute">value</span>": <span class="hljs-value"><span class="hljs-number">23226750339</span>
    </span>},
    {
      "<span class="hljs-attribute">label</span>": <span class="hljs-value"><span class="hljs-string">"Tipo Tributario"</span></span>,
      "<span class="hljs-attribute">value</span>": <span class="hljs-value"><span class="hljs-string">"Monotributo"</span>
    </span>},
    {
      "<span class="hljs-attribute">label</span>": <span class="hljs-value"><span class="hljs-string">"Categoría"</span></span>,
      "<span class="hljs-attribute">value</span>": <span class="hljs-value"><span class="hljs-string">"E LOCACIONES DE SERVICIO"</span>
    </span>}
  ]
</span>}</code></pre><div style="height: 1px;"></div></div></div></div></div><div id="entities--1" class="resource"><h3 class="resource-heading">Resource <a href="#entities--1" class="permalink">&nbsp;&para;</a></h3><div id="entities-post-1" class="action post"><h4 class="action-heading"><div class="name"></div><a href="#entities-post-1" class="method post">POST</a><code class="uri">/2.0/entities/create</code></h4><p>Given a country code, email and tax id (valid in that country code), creates a new entity</p>
<h4>Example URI</h4><div class="definition"><span class="method post">POST</span>&nbsp;<span class="uri"><span class="hostname">https://api.mobbex.com</span>/2.0/entities/create</span></div><div class="title"><strong>Request</strong><br/></div><div class="collapse-content"><div class="inner"><h5>Headers</h5><pre><code><span class="hljs-attribute">x-api-key</span>: <span class="hljs-string">CKlmn34BdsatbkpqerIRCkh38KHeihicsa113DFKBC,</span><br><span class="hljs-attribute">x-device-guid</span>: <span class="hljs-string">e12e01a9-1a38-45d1-8a90-dd1af52fb13a</span><br><span class="hljs-attribute">Content-Type</span>: <span class="hljs-string">application/json</span></code></pre><div style="height: 1px;"></div><h5>Body</h5><pre><code>{
  "<span class="hljs-attribute">country</span>": <span class="hljs-value"><span class="hljs-string">"arg"</span></span>,
  "<span class="hljs-attribute">email</span>": <span class="hljs-value"><span class="hljs-string">"jdoe@gmail.com"</span></span>,
  "<span class="hljs-attribute">tax_id</span>": <span class="hljs-value"><span class="hljs-string">"23226750339"</span>
</span>}</code></pre><div style="height: 1px;"></div></div></div><div class="title"><strong>Response&nbsp;&nbsp;<code>200</code></strong><br/></div><div class="collapse-content"><div class="inner"><h5>Headers</h5><pre><code><span class="hljs-attribute">vary</span>: <span class="hljs-string">X-HTTP-Method-Override, Accept-Encoding</span><br><span class="hljs-attribute">access-control-allow-origin</span>: <span class="hljs-string">*</span><br><span class="hljs-attribute">content-type</span>: <span class="hljs-string">application/json; charset=utf-8</span><br><span class="hljs-attribute">date</span>: <span class="hljs-string">Fri, 09 Dec 2016 19:36:03 GMT</span></code></pre><div style="height: 1px;"></div><h5>Body</h5><pre><code>{
  "<span class="hljs-attribute">result</span>": <span class="hljs-value"><span class="hljs-literal">true</span></span>,
  "<span class="hljs-attribute">data</span>": <span class="hljs-value">{
    "<span class="hljs-attribute">name</span>": <span class="hljs-value"><span class="hljs-string">"Doe Jon"</span></span>,
    "<span class="hljs-attribute">tax_id</span>": <span class="hljs-value"><span class="hljs-string">"23217630319"</span></span>,
    "<span class="hljs-attribute">access_token</span>": <span class="hljs-value"><span class="hljs-string">"ad4bb429-1825-4483-9b8e-a3695f5078a8"</span>
  </span>}
</span>}</code></pre><div style="height: 1px;"></div></div></div></div></div></section><section id="general" class="resource-group"><h2 class="group-heading">General <a href="#general" class="permalink">&para;</a></h2><div id="general-" class="resource"><h3 class="resource-heading">Resource <a href="#general-" class="permalink">&nbsp;&para;</a></h3><div id="general-get" class="action get"><h4 class="action-heading"><div class="name"></div><a href="#general-get" class="method get">GET</a><code class="uri">/2.0/countries/all</code></h4><p>Retrieves the list of available countries</p>
<h4>Example URI</h4><div class="definition"><span class="method get">GET</span>&nbsp;<span class="uri"><span class="hostname">https://api.mobbex.com</span>/2.0/countries/all</span></div><div class="title"><strong>Request</strong><br/></div><div class="collapse-content"><div class="inner"><h5>Headers</h5><pre><code><span class="hljs-attribute">x-api-key</span>: <span class="hljs-string">CKlmn34BdsatbkpqerIRCkh38KHeihicsa113DFKBC</span><br><span class="hljs-attribute">Content-Type</span>: <span class="hljs-string">application/json</span></code></pre><div style="height: 1px;"></div></div></div><div class="title"><strong>Response&nbsp;&nbsp;<code>200</code></strong><br/></div><div class="collapse-content"><div class="inner"><h5>Headers</h5><pre><code><span class="hljs-attribute">access-control-allow-origin</span>: <span class="hljs-string">*</span><br><span class="hljs-attribute">content-type</span>: <span class="hljs-string">application/json; charset=utf-8</span><br><span class="hljs-attribute">vary</span>: <span class="hljs-string">Accept-Encoding</span><br><span class="hljs-attribute">date</span>: <span class="hljs-string">Tue, 06 Dec 2016 22:05:21 GMT</span></code></pre><div style="height: 1px;"></div><h5>Body</h5><pre><code>[
  {
    "<span class="hljs-attribute">_id</span>": <span class="hljs-value"><span class="hljs-string">"558b84043312f2205c85ffe4"</span></span>,
    "<span class="hljs-attribute">cca3</span>": <span class="hljs-value"><span class="hljs-string">"ARG"</span></span>,
    "<span class="hljs-attribute">region</span>": <span class="hljs-value"><span class="hljs-string">"Americas"</span></span>,
    "<span class="hljs-attribute">subregion</span>": <span class="hljs-value"><span class="hljs-string">"South America"</span></span>,
    "<span class="hljs-attribute">created</span>": <span class="hljs-value"><span class="hljs-string">"2015-06-25T04:31:00.000Z"</span></span>,
    "<span class="hljs-attribute">callingcodes</span>": <span class="hljs-value">[]</span>,
    "<span class="hljs-attribute">currencies</span>": <span class="hljs-value">[
      <span class="hljs-string">"ARS"</span>
    ]</span>,
    "<span class="hljs-attribute">name</span>": <span class="hljs-value">{
      "<span class="hljs-attribute">eng</span>": <span class="hljs-value"><span class="hljs-string">"Argentine Republic"</span></span>,
      "<span class="hljs-attribute">spa</span>": <span class="hljs-value"><span class="hljs-string">"República Argentina"</span></span>,
      "<span class="hljs-attribute">por</span>": <span class="hljs-value"><span class="hljs-string">"República Argentina"</span>
    </span>}</span>,
    "<span class="hljs-attribute">active</span>": <span class="hljs-value"><span class="hljs-literal">true</span></span>,
    "<span class="hljs-attribute">hasInstallments</span>": <span class="hljs-value"><span class="hljs-literal">true</span></span>,
    "<span class="hljs-attribute">defaultOperator</span>": <span class="hljs-value"><span class="hljs-string">"5786b659c358d1bf602edc5c"</span>
  </span>}
]</code></pre><div style="height: 1px;"></div></div></div></div></div><div id="general--1" class="resource"><h3 class="resource-heading">Resource <a href="#general--1" class="permalink">&nbsp;&para;</a></h3><div id="general-get-1" class="action get"><h4 class="action-heading"><div class="name"></div><a href="#general-get-1" class="method get">GET</a><code class="uri">/2.0/currency/all</code></h4><p>Retrieves the list of available currencies</p>
<h4>Example URI</h4><div class="definition"><span class="method get">GET</span>&nbsp;<span class="uri"><span class="hostname">https://api.mobbex.com</span>/2.0/currency/all</span></div><div class="title"><strong>Request</strong><br/></div><div class="collapse-content"><div class="inner"><h5>Headers</h5><pre><code><span class="hljs-attribute">x-api-key</span>: <span class="hljs-string">CKlmn34BdsatbkpqerIRCkh38KHeihicsa113DFKBC</span><br><span class="hljs-attribute">Content-Type</span>: <span class="hljs-string">application/json</span></code></pre><div style="height: 1px;"></div></div></div><div class="title"><strong>Response&nbsp;&nbsp;<code>200</code></strong><br/></div><div class="collapse-content"><div class="inner"><h5>Headers</h5><pre><code><span class="hljs-attribute">access-control-allow-origin</span>: <span class="hljs-string">*</span><br><span class="hljs-attribute">content-type</span>: <span class="hljs-string">application/json; charset=utf-8</span><br><span class="hljs-attribute">vary</span>: <span class="hljs-string">Accept-Encoding</span><br><span class="hljs-attribute">date</span>: <span class="hljs-string">Tue, 06 Dec 2016 22:05:21 GMT</span></code></pre><div style="height: 1px;"></div><h5>Body</h5><pre><code>[
  {
    "<span class="hljs-attribute">value</span>": <span class="hljs-value"><span class="hljs-string">"NONE"</span></span>,
    "<span class="hljs-attribute">label</span>": <span class="hljs-value"><span class="hljs-string">"None"</span></span>,
    "<span class="hljs-attribute">symbol</span>": <span class="hljs-value"><span class="hljs-string">""</span></span>,
    "<span class="hljs-attribute">hidden</span>": <span class="hljs-value"><span class="hljs-literal">false</span>
  </span>},
  {
    "<span class="hljs-attribute">value</span>": <span class="hljs-value"><span class="hljs-string">"ARS"</span></span>,
    "<span class="hljs-attribute">label</span>": <span class="hljs-value"><span class="hljs-string">"Peso Argentino"</span></span>,
    "<span class="hljs-attribute">symbol</span>": <span class="hljs-value"><span class="hljs-string">"$"</span></span>,
    "<span class="hljs-attribute">hidden</span>": <span class="hljs-value"><span class="hljs-literal">false</span>
  </span>},
  {
    "<span class="hljs-attribute">value</span>": <span class="hljs-value"><span class="hljs-string">"USD"</span></span>,
    "<span class="hljs-attribute">label</span>": <span class="hljs-value"><span class="hljs-string">"Dollar"</span></span>,
    "<span class="hljs-attribute">symbol</span>": <span class="hljs-value"><span class="hljs-string">"USD"</span></span>,
    "<span class="hljs-attribute">hidden</span>": <span class="hljs-value"><span class="hljs-literal">false</span>
  </span>},
  {
    "<span class="hljs-attribute">value</span>": <span class="hljs-value"><span class="hljs-string">"BTC"</span></span>,
    "<span class="hljs-attribute">label</span>": <span class="hljs-value"><span class="hljs-string">"Bitcoin"</span></span>,
    "<span class="hljs-attribute">symbol</span>": <span class="hljs-value"><span class="hljs-string">"BTC"</span></span>,
    "<span class="hljs-attribute">hidden</span>": <span class="hljs-value"><span class="hljs-literal">false</span>
  </span>},
  {
    "<span class="hljs-attribute">value</span>": <span class="hljs-value"><span class="hljs-string">"TEST"</span></span>,
    "<span class="hljs-attribute">label</span>": <span class="hljs-value"><span class="hljs-string">"Test Money"</span></span>,
    "<span class="hljs-attribute">symbol</span>": <span class="hljs-value"><span class="hljs-string">"T$"</span></span>,
    "<span class="hljs-attribute">hidden</span>": <span class="hljs-value"><span class="hljs-literal">false</span>
  </span>}
]</code></pre><div style="height: 1px;"></div></div></div></div></div><div id="general--2" class="resource"><h3 class="resource-heading">Resource <a href="#general--2" class="permalink">&nbsp;&para;</a></h3><div id="general-get-2" class="action get"><h4 class="action-heading"><div class="name"></div><a href="#general-get-2" class="method get">GET</a><code class="uri">/2.0/categories/all</code></h4><p>Retrieves the list of existing categories</p>
<h4>Example URI</h4><div class="definition"><span class="method get">GET</span>&nbsp;<span class="uri"><span class="hostname">https://api.mobbex.com</span>/2.0/categories/all</span></div><div class="title"><strong>Request</strong><br/></div><div class="collapse-content"><div class="inner"><h5>Headers</h5><pre><code><span class="hljs-attribute">x-api-key</span>: <span class="hljs-string">CKlmn34BdsatbkpqerIRCkh38KHeihicsa113DFKBC</span><br><span class="hljs-attribute">Content-Type</span>: <span class="hljs-string">application/json</span></code></pre><div style="height: 1px;"></div></div></div><div class="title"><strong>Response&nbsp;&nbsp;<code>200</code></strong><br/></div><div class="collapse-content"><div class="inner"><h5>Headers</h5><pre><code><span class="hljs-attribute">access-control-allow-origin</span>: <span class="hljs-string">*</span><br><span class="hljs-attribute">content-type</span>: <span class="hljs-string">application/json; charset=utf-8</span><br><span class="hljs-attribute">vary</span>: <span class="hljs-string">Accept-Encoding</span><br><span class="hljs-attribute">date</span>: <span class="hljs-string">Tue, 06 Dec 2016 22:05:21 GMT</span></code></pre><div style="height: 1px;"></div><h5>Body</h5><pre><code>[
  {
    "<span class="hljs-attribute">_id</span>": <span class="hljs-value"><span class="hljs-string">"56db98dc7d4f3e30637af342"</span></span>,
    "<span class="hljs-attribute">identifier</span>": <span class="hljs-value"><span class="hljs-string">"test"</span></span>,
    "<span class="hljs-attribute">name</span>": <span class="hljs-value"><span class="hljs-string">"Test"</span></span>,
    "<span class="hljs-attribute">created</span>": <span class="hljs-value"><span class="hljs-string">"2016-03-06T02:41:32.135Z"</span></span>,
    "<span class="hljs-attribute">updated</span>": <span class="hljs-value"><span class="hljs-string">"2016-03-06T02:41:32.158Z"</span>
  </span>}
]</code></pre><div style="height: 1px;"></div></div></div></div></div><div id="general--3" class="resource"><h3 class="resource-heading">Resource <a href="#general--3" class="permalink">&nbsp;&para;</a></h3><div id="general-get-3" class="action get"><h4 class="action-heading"><div class="name"></div><a href="#general-get-3" class="method get">GET</a><code class="uri">/2.0/states/all</code></h4><p>Retrieves the list of existing states</p>
<h4>Example URI</h4><div class="definition"><span class="method get">GET</span>&nbsp;<span class="uri"><span class="hostname">https://api.mobbex.com</span>/2.0/states/all</span></div><div class="title"><strong>Request</strong><br/></div><div class="collapse-content"><div class="inner"><h5>Headers</h5><pre><code><span class="hljs-attribute">x-api-key</span>: <span class="hljs-string">CKlmn34BdsatbkpqerIRCkh38KHeihicsa113DFKBC</span><br><span class="hljs-attribute">Content-Type</span>: <span class="hljs-string">application/json</span></code></pre><div style="height: 1px;"></div></div></div><div class="title"><strong>Response&nbsp;&nbsp;<code>200</code></strong><br/></div><div class="collapse-content"><div class="inner"><h5>Headers</h5><pre><code><span class="hljs-attribute">access-control-allow-origin</span>: <span class="hljs-string">*</span><br><span class="hljs-attribute">content-type</span>: <span class="hljs-string">application/json; charset=utf-8</span><br><span class="hljs-attribute">vary</span>: <span class="hljs-string">Accept-Encoding</span><br><span class="hljs-attribute">date</span>: <span class="hljs-string">Tue, 06 Dec 2016 22:05:21 GMT</span></code></pre><div style="height: 1px;"></div><h5>Body</h5><pre><code>[
  {
    "<span class="hljs-attribute">_id</span>": <span class="hljs-value"><span class="hljs-string">"58115b6446725c7f616e5e47"</span></span>,
    "<span class="hljs-attribute">name</span>": <span class="hljs-value"><span class="hljs-string">"Buenos Aires"</span></span>,
    "<span class="hljs-attribute">created</span>": <span class="hljs-value"><span class="hljs-string">"2016-10-27T01:41:56.000Z"</span></span>,
    "<span class="hljs-attribute">active</span>": <span class="hljs-value"><span class="hljs-literal">true</span></span>,
    "<span class="hljs-attribute">tax_fixed_amount</span>": <span class="hljs-value"><span class="hljs-number">0</span></span>,
    "<span class="hljs-attribute">tax_percentage</span>": <span class="hljs-value"><span class="hljs-number">0</span></span>,
    "<span class="hljs-attribute">match</span>": <span class="hljs-value">[]
  </span>}
]</code></pre><div style="height: 1px;"></div></div></div></div></div><div id="general--4" class="resource"><h3 class="resource-heading">Resource <a href="#general--4" class="permalink">&nbsp;&para;</a></h3><div id="general-get-4" class="action get"><h4 class="action-heading"><div class="name"></div><a href="#general-get-4" class="method get">GET</a><code class="uri">/2.0/cities/all</code></h4><p>Retrieves the list of existing cities</p>
<h4>Example URI</h4><div class="definition"><span class="method get">GET</span>&nbsp;<span class="uri"><span class="hostname">https://api.mobbex.com</span>/2.0/cities/all</span></div><div class="title"><strong>Request</strong><br/></div><div class="collapse-content"><div class="inner"><h5>Headers</h5><pre><code><span class="hljs-attribute">x-api-key</span>: <span class="hljs-string">CKlmn34BdsatbkpqerIRCkh38KHeihicsa113DFKBC</span><br><span class="hljs-attribute">Content-Type</span>: <span class="hljs-string">application/json</span></code></pre><div style="height: 1px;"></div></div></div><div class="title"><strong>Response&nbsp;&nbsp;<code>200</code></strong><br/></div><div class="collapse-content"><div class="inner"><h5>Headers</h5><pre><code><span class="hljs-attribute">access-control-allow-origin</span>: <span class="hljs-string">*</span><br><span class="hljs-attribute">content-type</span>: <span class="hljs-string">application/json; charset=utf-8</span><br><span class="hljs-attribute">vary</span>: <span class="hljs-string">Accept-Encoding</span><br><span class="hljs-attribute">date</span>: <span class="hljs-string">Tue, 06 Dec 2016 22:05:21 GMT</span></code></pre><div style="height: 1px;"></div><h5>Body</h5><pre><code>[
  {
    "<span class="hljs-attribute">_id</span>": <span class="hljs-value"><span class="hljs-string">"5814fa1c11e5d148e70cdec8"</span></span>,
    "<span class="hljs-attribute">name</span>": <span class="hljs-value"><span class="hljs-string">"Ciudad Autonoma de Buenos Aires"</span></span>,
    "<span class="hljs-attribute">created</span>": <span class="hljs-value"><span class="hljs-string">"2016-10-29T19:35:56.000Z"</span></span>,
    "<span class="hljs-attribute">active</span>": <span class="hljs-value"><span class="hljs-literal">true</span></span>,
    "<span class="hljs-attribute">tax_fixed_amount</span>": <span class="hljs-value"><span class="hljs-number">0</span></span>,
    "<span class="hljs-attribute">tax_percentage</span>": <span class="hljs-value"><span class="hljs-number">0</span></span>,
    "<span class="hljs-attribute">match</span>": <span class="hljs-value">[]
  </span>}
]</code></pre><div style="height: 1px;"></div></div></div></div></div><div id="general--5" class="resource"><h3 class="resource-heading">Resource <a href="#general--5" class="permalink">&nbsp;&para;</a></h3><div id="general-get-5" class="action get"><h4 class="action-heading"><div class="name"></div><a href="#general-get-5" class="method get">GET</a><code class="uri">/2.0/sources/country/ARG</code></h4><p>Retrieves available sources for the given country</p>
<h4>Example URI</h4><div class="definition"><span class="method get">GET</span>&nbsp;<span class="uri"><span class="hostname">https://api.mobbex.com</span>/2.0/sources/country/ARG</span></div><div class="title"><strong>Request</strong><br/></div><div class="collapse-content"><div class="inner"><h5>Headers</h5><pre><code><span class="hljs-attribute">x-api-key</span>: <span class="hljs-string">CKlmn34BdsatbkpqerIRCkh38KHeihicsa113DFKBC</span><br><span class="hljs-attribute">Content-Type</span>: <span class="hljs-string">application/json</span></code></pre><div style="height: 1px;"></div></div></div><div class="title"><strong>Response&nbsp;&nbsp;<code>200</code></strong><br/></div><div class="collapse-content"><div class="inner"><h5>Headers</h5><pre><code><span class="hljs-attribute">access-control-allow-origin</span>: <span class="hljs-string">*</span><br><span class="hljs-attribute">content-type</span>: <span class="hljs-string">application/json; charset=utf-8</span><br><span class="hljs-attribute">vary</span>: <span class="hljs-string">Accept-Encoding</span><br><span class="hljs-attribute">date</span>: <span class="hljs-string">Tue, 06 Dec 2016 22:05:22 GMT</span></code></pre><div style="height: 1px;"></div><h5>Body</h5><pre><code>[
  {
    "<span class="hljs-attribute">_id</span>": <span class="hljs-value"><span class="hljs-string">"5786949177d9d7f65a409ee0"</span></span>,
    "<span class="hljs-attribute">name</span>": <span class="hljs-value"><span class="hljs-string">"Tarjeta de Prueba"</span></span>,
    "<span class="hljs-attribute">created</span>": <span class="hljs-value"><span class="hljs-string">"2016-07-13T19:20:49.000Z"</span></span>,
    "<span class="hljs-attribute">updated</span>": <span class="hljs-value"><span class="hljs-string">"2016-07-28T15:50:08.169Z"</span></span>,
    "<span class="hljs-attribute">enabled</span>": <span class="hljs-value"><span class="hljs-literal">true</span></span>,
    "<span class="hljs-attribute">hidden</span>": <span class="hljs-value"><span class="hljs-literal">false</span></span>,
    "<span class="hljs-attribute">token_required</span>": <span class="hljs-value"><span class="hljs-literal">true</span></span>,
    "<span class="hljs-attribute">backgroundColor</span>": <span class="hljs-value"><span class="hljs-string">"#FFFFFF"</span></span>,
    "<span class="hljs-attribute">fixed_amount</span>": <span class="hljs-value"><span class="hljs-number">0</span></span>,
    "<span class="hljs-attribute">percentage</span>": <span class="hljs-value"><span class="hljs-number">0</span></span>,
    "<span class="hljs-attribute">handler</span>": <span class="hljs-value"><span class="hljs-string">"nps"</span></span>,
    "<span class="hljs-attribute">max_digits</span>": <span class="hljs-value"><span class="hljs-number">16</span></span>,
    "<span class="hljs-attribute">min_digits</span>": <span class="hljs-value"><span class="hljs-number">16</span></span>,
    "<span class="hljs-attribute">currency</span>": <span class="hljs-value"><span class="hljs-string">"ARS"</span></span>,
    "<span class="hljs-attribute">countries</span>": <span class="hljs-value">[
      <span class="hljs-string">"558b84043312f2205c85ffe4"</span>
    ]</span>,
    "<span class="hljs-attribute">detection</span>": <span class="hljs-value"><span class="hljs-string">""</span></span>,
    "<span class="hljs-attribute">icon</span>": <span class="hljs-value"><span class="hljs-string">""</span></span>,
    "<span class="hljs-attribute">note</span>": <span class="hljs-value"><span class="hljs-string">""</span></span>,
    "<span class="hljs-attribute">reference</span>": <span class="hljs-value"><span class="hljs-string">"Visa"</span></span>,
    "<span class="hljs-attribute">service</span>": <span class="hljs-value"><span class="hljs-string">"54729f2983d006b925605af3"</span></span>,
    "<span class="hljs-attribute">type</span>": <span class="hljs-value"><span class="hljs-string">"card"</span></span>,
    "<span class="hljs-attribute">uid</span>": <span class="hljs-value"><span class="hljs-string">"9"</span>
  </span>},
  {
    "<span class="hljs-attribute">_id</span>": <span class="hljs-value"><span class="hljs-string">"58127d3e57498af0cffc5095"</span></span>,
    "<span class="hljs-attribute">name</span>": <span class="hljs-value"><span class="hljs-string">"Banco Piano"</span></span>,
    "<span class="hljs-attribute">created</span>": <span class="hljs-value"><span class="hljs-string">"2016-10-27T22:18:38.000Z"</span></span>,
    "<span class="hljs-attribute">updated</span>": <span class="hljs-value"><span class="hljs-string">"2016-10-27T22:24:40.971Z"</span></span>,
    "<span class="hljs-attribute">enabled</span>": <span class="hljs-value"><span class="hljs-literal">true</span></span>,
    "<span class="hljs-attribute">hidden</span>": <span class="hljs-value"><span class="hljs-literal">false</span></span>,
    "<span class="hljs-attribute">token_required</span>": <span class="hljs-value"><span class="hljs-literal">true</span></span>,
    "<span class="hljs-attribute">backgroundColor</span>": <span class="hljs-value"><span class="hljs-string">"#FFFFFF"</span></span>,
    "<span class="hljs-attribute">user_fields</span>": <span class="hljs-value">[]</span>,
    "<span class="hljs-attribute">max_total</span>": <span class="hljs-value"><span class="hljs-number">0</span></span>,
    "<span class="hljs-attribute">min_total</span>": <span class="hljs-value"><span class="hljs-number">0</span></span>,
    "<span class="hljs-attribute">fixed_amount</span>": <span class="hljs-value"><span class="hljs-number">0</span></span>,
    "<span class="hljs-attribute">percentage</span>": <span class="hljs-value"><span class="hljs-number">0</span></span>,
    "<span class="hljs-attribute">handler</span>": <span class="hljs-value"><span class="hljs-string">"fake"</span></span>,
    "<span class="hljs-attribute">max_digits</span>": <span class="hljs-value"><span class="hljs-number">16</span></span>,
    "<span class="hljs-attribute">min_digits</span>": <span class="hljs-value"><span class="hljs-number">16</span></span>,
    "<span class="hljs-attribute">currency</span>": <span class="hljs-value"><span class="hljs-string">"ARS"</span></span>,
    "<span class="hljs-attribute">countries</span>": <span class="hljs-value">[
      <span class="hljs-string">"558b84043312f2205c85ffe4"</span>
    ]</span>,
    "<span class="hljs-attribute">uid</span>": <span class="hljs-value"><span class="hljs-string">"rkvH6gell"</span></span>,
    "<span class="hljs-attribute">detection</span>": <span class="hljs-value"><span class="hljs-string">""</span></span>,
    "<span class="hljs-attribute">icon</span>": <span class="hljs-value"><span class="hljs-string">""</span></span>,
    "<span class="hljs-attribute">note</span>": <span class="hljs-value"><span class="hljs-string">""</span></span>,
    "<span class="hljs-attribute">reference</span>": <span class="hljs-value"><span class="hljs-string">""</span></span>,
    "<span class="hljs-attribute">service</span>": <span class="hljs-value"><span class="hljs-string">"54729f2983d006b925605af3"</span></span>,
    "<span class="hljs-attribute">type</span>": <span class="hljs-value"><span class="hljs-string">"bank"</span>
  </span>}
]</code></pre><div style="height: 1px;"></div></div></div></div></div></section><section id="sources" class="resource-group"><h2 class="group-heading">Sources <a href="#sources" class="permalink">&para;</a></h2><div id="sources-" class="resource"><h3 class="resource-heading">Resource <a href="#sources-" class="permalink">&nbsp;&para;</a></h3><div id="sources-post" class="action post"><h4 class="action-heading"><div class="name"></div><a href="#sources-post" class="method post">POST</a><code class="uri">/2.0/sources/entity</code></h4><h4>Example URI</h4><div class="definition"><span class="method post">POST</span>&nbsp;<span class="uri"><span class="hostname">https://api.mobbex.com</span>/2.0/sources/entity</span></div><div class="title"><strong>Request</strong><br/></div><div class="collapse-content"><div class="inner"><h5>Headers</h5><pre><code><span class="hljs-attribute">x-api-key</span>: <span class="hljs-string">CKlmn34BdsatbkpqerIRCkh38KHeihicsa113DFKBC,</span><br><span class="hljs-attribute">x-access-token</span>: <span class="hljs-string">d31f0721-2f85-44e7-bcc6-15e19d1a53cc</span><br><span class="hljs-attribute">x-device-guid</span>: <span class="hljs-string">e12e01a9-1a38-45d1-8a90-dd1af52fb13a</span><br><span class="hljs-attribute">Content-Type</span>: <span class="hljs-string">application/json</span></code></pre><div style="height: 1px;"></div></div></div><div class="title"><strong>Response&nbsp;&nbsp;<code>200</code></strong><br/></div><div class="collapse-content"><div class="inner"><h5>Headers</h5><pre><code><span class="hljs-attribute">vary</span>: <span class="hljs-string">X-HTTP-Method-Override, Accept-Encoding</span><br><span class="hljs-attribute">access-control-allow-origin</span>: <span class="hljs-string">*</span><br><span class="hljs-attribute">content-type</span>: <span class="hljs-string">application/json; charset=utf-8</span><br><span class="hljs-attribute">date</span>: <span class="hljs-string">Tue, 06 Dec 2016 22:05:50 GMT</span></code></pre><div style="height: 1px;"></div><h5>Body</h5><pre><code>[
  {
    "<span class="hljs-attribute">_id</span>": <span class="hljs-value"><span class="hljs-string">"571af3d472b3d2626dbabf27"</span></span>,
    "<span class="hljs-attribute">created</span>": <span class="hljs-value"><span class="hljs-string">"2016-04-23T04:02:28.000Z"</span></span>,
    "<span class="hljs-attribute">updated</span>": <span class="hljs-value"><span class="hljs-string">"2016-12-06T21:37:55.442Z"</span></span>,
    "<span class="hljs-attribute">source</span>": <span class="hljs-value">{
      "<span class="hljs-attribute">_id</span>": <span class="hljs-value"><span class="hljs-string">"54832b3014d5048e4ee654c9"</span></span>,
      "<span class="hljs-attribute">name</span>": <span class="hljs-value"><span class="hljs-string">"Mobbex"</span></span>,
      "<span class="hljs-attribute">handler</span>": <span class="hljs-value"><span class="hljs-string">"fake"</span></span>,
      "<span class="hljs-attribute">detection</span>": <span class="hljs-value"><span class="hljs-string">"^(1111)"</span></span>,
      "<span class="hljs-attribute">icon</span>": <span class="hljs-value"><span class="hljs-string">"pf-credit-card"</span></span>,
      "<span class="hljs-attribute">__v</span>": <span class="hljs-value"><span class="hljs-number">2</span></span>,
      "<span class="hljs-attribute">enabled</span>": <span class="hljs-value"><span class="hljs-literal">true</span></span>,
      "<span class="hljs-attribute">internal_name</span>": <span class="hljs-value"><span class="hljs-string">"[fake] Mobbex (Mobbex)"</span></span>,
      "<span class="hljs-attribute">type</span>": <span class="hljs-value"><span class="hljs-string">"card"</span></span>,
      "<span class="hljs-attribute">international</span>": <span class="hljs-value"><span class="hljs-literal">true</span></span>,
      "<span class="hljs-attribute">note</span>": <span class="hljs-value"><span class="hljs-string">""</span></span>,
      "<span class="hljs-attribute">sortOrder</span>": <span class="hljs-value"><span class="hljs-number">4</span></span>,
      "<span class="hljs-attribute">category</span>": <span class="hljs-value"><span class="hljs-string">"card"</span></span>,
      "<span class="hljs-attribute">currency</span>": <span class="hljs-value"><span class="hljs-string">"TEST"</span></span>,
      "<span class="hljs-attribute">uid</span>": <span class="hljs-value"><span class="hljs-string">"4"</span>
    </span>}</span>,
    "<span class="hljs-attribute">view</span>": <span class="hljs-value">{
      "<span class="hljs-attribute">group</span>": <span class="hljs-value"><span class="hljs-string">"card"</span></span>,
      "<span class="hljs-attribute">subgroup</span>": <span class="hljs-value"><span class="hljs-string">"mobbex"</span></span>,
      "<span class="hljs-attribute">type</span>": <span class="hljs-value"><span class="hljs-string">"card"</span></span>,
      "<span class="hljs-attribute">options</span>": <span class="hljs-value">{
        "<span class="hljs-attribute">card_input</span>": <span class="hljs-value"><span class="hljs-literal">true</span></span>,
        "<span class="hljs-attribute">installments</span>": <span class="hljs-value"><span class="hljs-literal">true</span></span>,
        "<span class="hljs-attribute">cvv</span>": <span class="hljs-value"><span class="hljs-literal">true</span></span>,
        "<span class="hljs-attribute">expiration</span>": <span class="hljs-value"><span class="hljs-literal">true</span></span>,
        "<span class="hljs-attribute">filter</span>": <span class="hljs-value"><span class="hljs-literal">true</span>
      </span>}
    </span>}</span>,
    "<span class="hljs-attribute">supported_flows</span>": <span class="hljs-value">[
      <span class="hljs-string">"payment"</span>
    ]</span>,
    "<span class="hljs-attribute">installments</span>": <span class="hljs-value">[
      {
        "<span class="hljs-attribute">_id</span>": <span class="hljs-value"><span class="hljs-string">"547157c7e20f6a7d0bc2f635"</span></span>,
        "<span class="hljs-attribute">name</span>": <span class="hljs-value"><span class="hljs-string">"1"</span></span>,
        "<span class="hljs-attribute">description</span>": <span class="hljs-value"><span class="hljs-string">"1 pago"</span></span>,
        "<span class="hljs-attribute">count</span>": <span class="hljs-value"><span class="hljs-number">1</span></span>,
        "<span class="hljs-attribute">hidden</span>": <span class="hljs-value"><span class="hljs-literal">false</span>
      </span>},
      {
        "<span class="hljs-attribute">_id</span>": <span class="hljs-value"><span class="hljs-string">"54726543186001ce72a21b77"</span></span>,
        "<span class="hljs-attribute">name</span>": <span class="hljs-value"><span class="hljs-string">"12"</span></span>,
        "<span class="hljs-attribute">description</span>": <span class="hljs-value"><span class="hljs-string">"12 pagos"</span></span>,
        "<span class="hljs-attribute">count</span>": <span class="hljs-value"><span class="hljs-number">12</span></span>,
        "<span class="hljs-attribute">hidden</span>": <span class="hljs-value"><span class="hljs-literal">false</span>
      </span>}
    ]
  </span>},
  {
    "<span class="hljs-attribute">_id</span>": <span class="hljs-value"><span class="hljs-string">"57432c8e39adeb27efae9e23"</span></span>,
    "<span class="hljs-attribute">created</span>": <span class="hljs-value"><span class="hljs-string">"2016-05-23T16:15:10.000Z"</span></span>,
    "<span class="hljs-attribute">updated</span>": <span class="hljs-value"><span class="hljs-string">"2016-05-23T16:15:22.450Z"</span></span>,
    "<span class="hljs-attribute">source</span>": <span class="hljs-value">{
      "<span class="hljs-attribute">_id</span>": <span class="hljs-value"><span class="hljs-string">"54de9b068dbc831b5cd47e0f"</span></span>,
      "<span class="hljs-attribute">name</span>": <span class="hljs-value"><span class="hljs-string">"Mobbex Cash"</span></span>,
      "<span class="hljs-attribute">handler</span>": <span class="hljs-value"><span class="hljs-string">"fake"</span></span>,
      "<span class="hljs-attribute">detection</span>": <span class="hljs-value"><span class="hljs-string">""</span></span>,
      "<span class="hljs-attribute">icon</span>": <span class="hljs-value"><span class="hljs-string">""</span></span>,
      "<span class="hljs-attribute">enabled</span>": <span class="hljs-value"><span class="hljs-literal">true</span></span>,
      "<span class="hljs-attribute">internal_name</span>": <span class="hljs-value"><span class="hljs-string">"[fake] Mobbex Cash (Mobbex)"</span></span>,
      "<span class="hljs-attribute">type</span>": <span class="hljs-value"><span class="hljs-string">"cash"</span></span>,
      "<span class="hljs-attribute">note</span>": <span class="hljs-value"><span class="hljs-string">""</span></span>,
      "<span class="hljs-attribute">category</span>": <span class="hljs-value"><span class="hljs-string">"cash"</span></span>,
      "<span class="hljs-attribute">currency</span>": <span class="hljs-value"><span class="hljs-string">"TEST"</span></span>,
      "<span class="hljs-attribute">max_digits</span>": <span class="hljs-value"><span class="hljs-number">0</span></span>,
      "<span class="hljs-attribute">min_digits</span>": <span class="hljs-value"><span class="hljs-number">0</span></span>,
      "<span class="hljs-attribute">token_required</span>": <span class="hljs-value"><span class="hljs-literal">false</span></span>,
      "<span class="hljs-attribute">uid</span>": <span class="hljs-value"><span class="hljs-string">"7"</span>
    </span>}</span>,
    "<span class="hljs-attribute">view</span>": <span class="hljs-value">{
      "<span class="hljs-attribute">group</span>": <span class="hljs-value"><span class="hljs-string">"cash"</span></span>,
      "<span class="hljs-attribute">subgroup</span>": <span class="hljs-value"><span class="hljs-string">"cash"</span></span>,
      "<span class="hljs-attribute">type</span>": <span class="hljs-value"><span class="hljs-string">"selector"</span>
    </span>}</span>,
    "<span class="hljs-attribute">supported_flows</span>": <span class="hljs-value">[
      <span class="hljs-string">"payment"</span>
    ]</span>,
    "<span class="hljs-attribute">installments</span>": <span class="hljs-value">[]
  </span>},
  {
    "<span class="hljs-attribute">_id</span>": <span class="hljs-value"><span class="hljs-string">"583f16cea205deecdf99d66e"</span></span>,
    "<span class="hljs-attribute">entity</span>": <span class="hljs-value"><span class="hljs-string">"56db9a209601a1696378a6ef"</span></span>,
    "<span class="hljs-attribute">source</span>": <span class="hljs-value">{
      "<span class="hljs-attribute">_id</span>": <span class="hljs-value"><span class="hljs-string">"58127d3e57498af0cffc5095"</span></span>,
      "<span class="hljs-attribute">name</span>": <span class="hljs-value"><span class="hljs-string">"Banco Piano"</span></span>,
      "<span class="hljs-attribute">enabled</span>": <span class="hljs-value"><span class="hljs-literal">true</span></span>,
      "<span class="hljs-attribute">hidden</span>": <span class="hljs-value"><span class="hljs-literal">false</span></span>,
      "<span class="hljs-attribute">token_required</span>": <span class="hljs-value"><span class="hljs-literal">true</span></span>,
      "<span class="hljs-attribute">backgroundColor</span>": <span class="hljs-value"><span class="hljs-string">"#FFFFFF"</span></span>,
      "<span class="hljs-attribute">user_fields</span>": <span class="hljs-value">[]</span>,
      "<span class="hljs-attribute">max_total</span>": <span class="hljs-value"><span class="hljs-number">0</span></span>,
      "<span class="hljs-attribute">min_total</span>": <span class="hljs-value"><span class="hljs-number">0</span></span>,
      "<span class="hljs-attribute">fixed_amount</span>": <span class="hljs-value"><span class="hljs-number">0</span></span>,
      "<span class="hljs-attribute">percentage</span>": <span class="hljs-value"><span class="hljs-number">0</span></span>,
      "<span class="hljs-attribute">handler</span>": <span class="hljs-value"><span class="hljs-string">"fake"</span></span>,
      "<span class="hljs-attribute">max_digits</span>": <span class="hljs-value"><span class="hljs-number">16</span></span>,
      "<span class="hljs-attribute">min_digits</span>": <span class="hljs-value"><span class="hljs-number">16</span></span>,
      "<span class="hljs-attribute">currency</span>": <span class="hljs-value"><span class="hljs-string">"ARS"</span></span>,
      "<span class="hljs-attribute">uid</span>": <span class="hljs-value"><span class="hljs-string">"rkvH6gell"</span></span>,
      "<span class="hljs-attribute">__v</span>": <span class="hljs-value"><span class="hljs-number">1</span></span>,
      "<span class="hljs-attribute">detection</span>": <span class="hljs-value"><span class="hljs-string">""</span></span>,
      "<span class="hljs-attribute">icon</span>": <span class="hljs-value"><span class="hljs-string">""</span></span>,
      "<span class="hljs-attribute">note</span>": <span class="hljs-value"><span class="hljs-string">""</span></span>,
      "<span class="hljs-attribute">type</span>": <span class="hljs-value"><span class="hljs-string">"bank"</span>
    </span>}</span>,
    "<span class="hljs-attribute">created</span>": <span class="hljs-value"><span class="hljs-string">"2016-11-30T18:13:34.882Z"</span></span>,
    "<span class="hljs-attribute">updated</span>": <span class="hljs-value"><span class="hljs-string">"2016-11-30T18:13:34.882Z"</span></span>,
    "<span class="hljs-attribute">user_fields</span>": <span class="hljs-value">[
      {
        "<span class="hljs-attribute">name</span>": <span class="hljs-value"><span class="hljs-string">"identification"</span></span>,
        "<span class="hljs-attribute">label</span>": <span class="hljs-value"><span class="hljs-string">"Número de Documento"</span></span>,
        "<span class="hljs-attribute">type</span>": <span class="hljs-value"><span class="hljs-string">"text"</span></span>,
        "<span class="hljs-attribute">required</span>": <span class="hljs-value"><span class="hljs-literal">true</span>
      </span>},
      {
        "<span class="hljs-attribute">name</span>": <span class="hljs-value"><span class="hljs-string">"name"</span></span>,
        "<span class="hljs-attribute">label</span>": <span class="hljs-value"><span class="hljs-string">"Nombre Completo"</span></span>,
        "<span class="hljs-attribute">type</span>": <span class="hljs-value"><span class="hljs-string">"text"</span></span>,
        "<span class="hljs-attribute">required</span>": <span class="hljs-value"><span class="hljs-literal">true</span>
      </span>},
      {
        "<span class="hljs-attribute">name</span>": <span class="hljs-value"><span class="hljs-string">"phone"</span></span>,
        "<span class="hljs-attribute">label</span>": <span class="hljs-value"><span class="hljs-string">"Número de Teléfono"</span></span>,
        "<span class="hljs-attribute">type</span>": <span class="hljs-value"><span class="hljs-string">"text"</span></span>,
        "<span class="hljs-attribute">required</span>": <span class="hljs-value"><span class="hljs-literal">true</span>
      </span>}
    ]</span>,
    "<span class="hljs-attribute">view</span>": <span class="hljs-value">{
      "<span class="hljs-attribute">group</span>": <span class="hljs-value"><span class="hljs-string">"others"</span></span>,
      "<span class="hljs-attribute">type</span>": <span class="hljs-value"><span class="hljs-string">"none"</span>
    </span>}</span>,
    "<span class="hljs-attribute">supported_flows</span>": <span class="hljs-value">[
      <span class="hljs-string">"payment"</span>
    ]</span>,
    "<span class="hljs-attribute">installments</span>": <span class="hljs-value">[]
  </span>}
]</code></pre><div style="height: 1px;"></div></div></div></div></div><div id="sources--1" class="resource"><h3 class="resource-heading">Resource <a href="#sources--1" class="permalink">&nbsp;&para;</a></h3><div id="sources-post-1" class="action post"><h4 class="action-heading"><div class="name"></div><a href="#sources-post-1" class="method post">POST</a><code class="uri">/2.0/sources/calculate</code></h4><p>Calculates an operation total based on the source, installment and amount</p>
<h4>Example URI</h4><div class="definition"><span class="method post">POST</span>&nbsp;<span class="uri"><span class="hostname">https://api.mobbex.com</span>/2.0/sources/calculate</span></div><div class="title"><strong>Request</strong><br/></div><div class="collapse-content"><div class="inner"><h5>Headers</h5><pre><code><span class="hljs-attribute">x-api-key</span>: <span class="hljs-string">CKlmn34BdsatbkpqerIRCkh38KHeihicsa113DFKBC,</span><br><span class="hljs-attribute">x-access-token</span>: <span class="hljs-string">d31f0721-2f85-44e7-bcc6-15e19d1a53cc</span><br><span class="hljs-attribute">x-device-guid</span>: <span class="hljs-string">e12e01a9-1a38-45d1-8a90-dd1af52fb13a</span><br><span class="hljs-attribute">Content-Type</span>: <span class="hljs-string">application/json</span></code></pre><div style="height: 1px;"></div><h5>Body</h5><pre><code>{
  "<span class="hljs-attribute">source</span>": <span class="hljs-value"><span class="hljs-string">"584f55d37e012058d4a57b98"</span></span>,
  "<span class="hljs-attribute">installment</span>": <span class="hljs-value"><span class="hljs-string">"547157c7e20f6a7d0bc2f635"</span></span>,
  "<span class="hljs-attribute">amount</span>": <span class="hljs-value"><span class="hljs-string">"200"</span>
</span>}</code></pre><div style="height: 1px;"></div></div></div><div class="title"><strong>Response&nbsp;&nbsp;<code>200</code></strong><br/></div><div class="collapse-content"><div class="inner"><h5>Headers</h5><pre><code><span class="hljs-attribute">vary</span>: <span class="hljs-string">X-HTTP-Method-Override, Accept-Encoding</span><br><span class="hljs-attribute">access-control-allow-origin</span>: <span class="hljs-string">*</span><br><span class="hljs-attribute">content-type</span>: <span class="hljs-string">application/json; charset=utf-8</span><br><span class="hljs-attribute">date</span>: <span class="hljs-string">Tue, 13 Dec 2016 18:16:48 GMT</span></code></pre><div style="height: 1px;"></div><h5>Body</h5><pre><code>{
  "<span class="hljs-attribute">currency</span>": <span class="hljs-value"><span class="hljs-string">"TEST"</span></span>,
  "<span class="hljs-attribute">total</span>": <span class="hljs-value"><span class="hljs-number">200</span></span>,
  "<span class="hljs-attribute">user_charges</span>": <span class="hljs-value"><span class="hljs-number">0</span></span>,
  "<span class="hljs-attribute">installment_amount</span>": <span class="hljs-value"><span class="hljs-number">200</span></span>,
  "<span class="hljs-attribute">requested</span>": <span class="hljs-value">{
    "<span class="hljs-attribute">total</span>": <span class="hljs-value"><span class="hljs-number">200</span></span>,
    "<span class="hljs-attribute">currency</span>": <span class="hljs-value"><span class="hljs-string">"TEST"</span>
  </span>}</span>,
  "<span class="hljs-attribute">currency_data</span>": <span class="hljs-value">{
    "<span class="hljs-attribute">value</span>": <span class="hljs-value"><span class="hljs-string">"TEST"</span></span>,
    "<span class="hljs-attribute">label</span>": <span class="hljs-value"><span class="hljs-string">"Test Money"</span></span>,
    "<span class="hljs-attribute">symbol</span>": <span class="hljs-value"><span class="hljs-string">"T$"</span></span>,
    "<span class="hljs-attribute">hidden</span>": <span class="hljs-value"><span class="hljs-literal">false</span>
  </span>}
</span>}</code></pre><div style="height: 1px;"></div></div></div></div></div><div id="sources--2" class="resource"><h3 class="resource-heading">Resource <a href="#sources--2" class="permalink">&nbsp;&para;</a></h3><div id="sources-post-2" class="action post"><h4 class="action-heading"><div class="name"></div><a href="#sources-post-2" class="method post">POST</a><code class="uri">/2.0/sources/token</code></h4><p>Creates a token based on a user and a source</p>
<h4>Example URI</h4><div class="definition"><span class="method post">POST</span>&nbsp;<span class="uri"><span class="hostname">https://api.mobbex.com</span>/2.0/sources/token</span></div><div class="title"><strong>Request</strong><br/></div><div class="collapse-content"><div class="inner"><h5>Headers</h5><pre><code><span class="hljs-attribute">x-api-key</span>: <span class="hljs-string">CKlmn34BdsatbkpqerIRCkh38KHeihicsa113DFKBC,</span><br><span class="hljs-attribute">x-access-token</span>: <span class="hljs-string">d31f0721-2f85-44e7-bcc6-15e19d1a53cc</span><br><span class="hljs-attribute">x-device-guid</span>: <span class="hljs-string">e12e01a9-1a38-45d1-8a90-dd1af52fb13a</span><br><span class="hljs-attribute">Content-Type</span>: <span class="hljs-string">application/json</span></code></pre><div style="height: 1px;"></div><h5>Body</h5><pre><code>{
  "<span class="hljs-attribute">data</span>": <span class="hljs-value">{
    "<span class="hljs-attribute">user</span>": <span class="hljs-value">{
      "<span class="hljs-attribute">uid</span>": <span class="hljs-value"><span class="hljs-string">"57a0fe085b8c92cb2e5ed554"</span></span>,
      "<span class="hljs-attribute">name</span>": <span class="hljs-value"><span class="hljs-string">"John"</span></span>,
      "<span class="hljs-attribute">email</span>": <span class="hljs-value"><span class="hljs-string">"John@mobbex.com"</span></span>,
      "<span class="hljs-attribute">identification</span>": <span class="hljs-value"><span class="hljs-string">""</span></span>,
      "<span class="hljs-attribute">phone</span>": <span class="hljs-value"><span class="hljs-string">""</span>
    </span>}</span>,
    "<span class="hljs-attribute">source</span>": <span class="hljs-value">{
      "<span class="hljs-attribute">id</span>": <span class="hljs-value"><span class="hljs-string">"58325bb4e2fd6ef01b3eb93f"</span></span>,
      "<span class="hljs-attribute">number</span>": <span class="hljs-value"><span class="hljs-string">"123456789"</span></span>,
      "<span class="hljs-attribute">month</span>": <span class="hljs-value"><span class="hljs-string">"11"</span></span>,
      "<span class="hljs-attribute">year</span>": <span class="hljs-value"><span class="hljs-string">"2017"</span></span>,
      "<span class="hljs-attribute">cvv</span>": <span class="hljs-value"><span class="hljs-string">"123"</span>
    </span>}
  </span>}
</span>}</code></pre><div style="height: 1px;"></div></div></div><div class="title"><strong>Response&nbsp;&nbsp;<code>200</code></strong><br/></div><div class="collapse-content"><div class="inner"><h5>Headers</h5><pre><code><span class="hljs-attribute">vary</span>: <span class="hljs-string">X-HTTP-Method-Override, Accept-Encoding</span><br><span class="hljs-attribute">access-control-allow-origin</span>: <span class="hljs-string">*</span><br><span class="hljs-attribute">content-type</span>: <span class="hljs-string">application/json; charset=utf-8</span><br><span class="hljs-attribute">date</span>: <span class="hljs-string">Tue, 13 Dec 2016 18:56:46 GMT</span></code></pre><div style="height: 1px;"></div><h5>Body</h5><pre><code>{
  "<span class="hljs-attribute">result</span>": <span class="hljs-value"><span class="hljs-literal">true</span></span>,
  "<span class="hljs-attribute">data</span>": <span class="hljs-value">{
    "<span class="hljs-attribute">token</span>": <span class="hljs-value"><span class="hljs-string">"THy-LuV6TXg"</span>
  </span>}
</span>}</code></pre><div style="height: 1px;"></div></div></div></div></div><div id="sources--3" class="resource"><h3 class="resource-heading">Resource <a href="#sources--3" class="permalink">&nbsp;&para;</a></h3><div id="sources-post-3" class="action post"><h4 class="action-heading"><div class="name"></div><a href="#sources-post-3" class="method post">POST</a><code class="uri">/2.0/sources/token</code></h4><h4>Example URI</h4><div class="definition"><span class="method post">POST</span>&nbsp;<span class="uri"><span class="hostname">https://api.mobbex.com</span>/2.0/sources/token</span></div><div class="title"><strong>Request</strong><br/></div><div class="collapse-content"><div class="inner"><h5>Headers</h5><pre><code><span class="hljs-attribute">x-api-key</span>: <span class="hljs-string">CKlmn34BdsatbkpqerIRCkh38KHeihicsa113DFKBC,</span><br><span class="hljs-attribute">x-access-token</span>: <span class="hljs-string">d31f0721-2f85-44e7-bcc6-15e19d1a53cc</span><br><span class="hljs-attribute">x-device-guid</span>: <span class="hljs-string">e12e01a9-1a38-45d1-8a90-dd1af52fb13a</span><br><span class="hljs-attribute">Content-Type</span>: <span class="hljs-string">application/json</span></code></pre><div style="height: 1px;"></div><h5>Body</h5><pre><code>{
  "<span class="hljs-attribute">data</span>": <span class="hljs-value">{
    "<span class="hljs-attribute">user</span>": <span class="hljs-value">{
      "<span class="hljs-attribute">uid</span>": <span class="hljs-value"><span class="hljs-string">"57a0fe085b8c92cb2e5ed554"</span></span>,
      "<span class="hljs-attribute">name</span>": <span class="hljs-value"><span class="hljs-string">"John"</span></span>,
      "<span class="hljs-attribute">email</span>": <span class="hljs-value"><span class="hljs-string">"John@mobbex.com"</span></span>,
      "<span class="hljs-attribute">identification</span>": <span class="hljs-value"><span class="hljs-string">""</span></span>,
      "<span class="hljs-attribute">phone</span>": <span class="hljs-value"><span class="hljs-string">""</span>
    </span>}</span>,
    "<span class="hljs-attribute">source</span>": <span class="hljs-value">{
      "<span class="hljs-attribute">id</span>": <span class="hljs-value"><span class="hljs-string">"58325bb4e2fd6ef01b3eb93f"</span></span>,
      "<span class="hljs-attribute">number</span>": <span class="hljs-value"><span class="hljs-string">"123456789"</span></span>,
      "<span class="hljs-attribute">month</span>": <span class="hljs-value"><span class="hljs-string">"11"</span></span>,
      "<span class="hljs-attribute">year</span>": <span class="hljs-value"><span class="hljs-string">"2017"</span></span>,
      "<span class="hljs-attribute">cvv</span>": <span class="hljs-value"><span class="hljs-string">"123"</span>
    </span>}
  </span>}
</span>}</code></pre><div style="height: 1px;"></div></div></div><div class="title"><strong>Response&nbsp;&nbsp;<code>200</code></strong><br/></div><div class="collapse-content"><div class="inner"><h5>Headers</h5><pre><code><span class="hljs-attribute">vary</span>: <span class="hljs-string">X-HTTP-Method-Override, Accept-Encoding</span><br><span class="hljs-attribute">access-control-allow-origin</span>: <span class="hljs-string">*</span><br><span class="hljs-attribute">content-type</span>: <span class="hljs-string">application/json; charset=utf-8</span><br><span class="hljs-attribute">date</span>: <span class="hljs-string">Wed, 14 Dec 2016 01:39:31 GMT</span></code></pre><div style="height: 1px;"></div><h5>Body</h5><pre><code>{
  "<span class="hljs-attribute">result</span>": <span class="hljs-value"><span class="hljs-literal">true</span></span>,
  "<span class="hljs-attribute">data</span>": <span class="hljs-value">{
    "<span class="hljs-attribute">token</span>": <span class="hljs-value"><span class="hljs-string">"TrJljRz70Qx"</span>
  </span>}
</span>}</code></pre><div style="height: 1px;"></div></div></div></div></div></section><section id="transaction" class="resource-group"><h2 class="group-heading">Transaction <a href="#transaction" class="permalink">&para;</a></h2><div id="transaction-" class="resource"><h3 class="resource-heading">Resource <a href="#transaction-" class="permalink">&nbsp;&para;</a></h3><div id="transaction-post" class="action post"><h4 class="action-heading"><div class="name"></div><a href="#transaction-post" class="method post">POST</a><code class="uri">/2.0/transaction/payment</code></h4><p>Initiates a transaction</p>
<h4>Example URI</h4><div class="definition"><span class="method post">POST</span>&nbsp;<span class="uri"><span class="hostname">https://api.mobbex.com</span>/2.0/transaction/payment</span></div><div class="title"><strong>Request</strong><br/></div><div class="collapse-content"><div class="inner"><h5>Headers</h5><pre><code><span class="hljs-attribute">x-api-key</span>: <span class="hljs-string">CKlmn34BdsatbkpqerIRCkh38KHeihicsa113DFKBC,</span><br><span class="hljs-attribute">x-access-token</span>: <span class="hljs-string">d31f0721-2f85-44e7-bcc6-15e19d1a53cc</span><br><span class="hljs-attribute">Content-Type</span>: <span class="hljs-string">application/json</span></code></pre><div style="height: 1px;"></div><h5>Body</h5><pre><code>{
  "<span class="hljs-attribute">entity</span>": <span class="hljs-value"><span class="hljs-string">"584f55c87e012058d4a57b87"</span></span>,
  "<span class="hljs-attribute">source</span>": <span class="hljs-value"><span class="hljs-string">"TrJljRz70Qx"</span></span>,
  "<span class="hljs-attribute">installment</span>": <span class="hljs-value"><span class="hljs-string">"547157c7e20f6a7d0bc2f635"</span></span>,
  "<span class="hljs-attribute">utid</span>": <span class="hljs-value"><span class="hljs-string">"1234"</span></span>,
  "<span class="hljs-attribute">total</span>": <span class="hljs-value"><span class="hljs-string">"200"</span>
</span>}</code></pre><div style="height: 1px;"></div></div></div><div class="title"><strong>Response&nbsp;&nbsp;<code>200</code></strong><br/></div><div class="collapse-content"><div class="inner"><h5>Headers</h5><pre><code><span class="hljs-attribute">vary</span>: <span class="hljs-string">X-HTTP-Method-Override, Accept-Encoding</span><br><span class="hljs-attribute">access-control-allow-origin</span>: <span class="hljs-string">*</span><br><span class="hljs-attribute">content-type</span>: <span class="hljs-string">application/json; charset=utf-8</span><br><span class="hljs-attribute">date</span>: <span class="hljs-string">Wed, 14 Dec 2016 01:39:39 GMT</span></code></pre><div style="height: 1px;"></div><h5>Body</h5><pre><code>{
  "<span class="hljs-attribute">result</span>": <span class="hljs-value"><span class="hljs-literal">true</span></span>,
  "<span class="hljs-attribute">view</span>": <span class="hljs-value">{
    "<span class="hljs-attribute">type</span>": <span class="hljs-value"><span class="hljs-string">"cash"</span></span>,
    "<span class="hljs-attribute">options</span>": <span class="hljs-value">{
      "<span class="hljs-attribute">barcode</span>": <span class="hljs-value"><span class="hljs-literal">true</span>
    </span>}
  </span>}</span>,
  "<span class="hljs-attribute">payment</span>": <span class="hljs-value">{
    "<span class="hljs-attribute">id</span>": <span class="hljs-value"><span class="hljs-string">"Skfmymm07g"</span></span>,
    "<span class="hljs-attribute">status</span>": <span class="hljs-value">{
      "<span class="hljs-attribute">code</span>": <span class="hljs-value"><span class="hljs-string">"2"</span></span>,
      "<span class="hljs-attribute">text</span>": <span class="hljs-value"><span class="hljs-string">"Waiting"</span></span>,
      "<span class="hljs-attribute">message</span>": <span class="hljs-value"><span class="hljs-string">""</span>
    </span>}</span>,
    "<span class="hljs-attribute">total</span>": <span class="hljs-value"><span class="hljs-number">200</span></span>,
    "<span class="hljs-attribute">currency</span>": <span class="hljs-value">{
      "<span class="hljs-attribute">code</span>": <span class="hljs-value"><span class="hljs-string">"TEST"</span></span>,
      "<span class="hljs-attribute">text</span>": <span class="hljs-value"><span class="hljs-string">"Test Money"</span>
    </span>}</span>,
    "<span class="hljs-attribute">currency_data</span>": <span class="hljs-value">{
      "<span class="hljs-attribute">value</span>": <span class="hljs-value"><span class="hljs-string">"TEST"</span></span>,
      "<span class="hljs-attribute">label</span>": <span class="hljs-value"><span class="hljs-string">"Test Money"</span></span>,
      "<span class="hljs-attribute">symbol</span>": <span class="hljs-value"><span class="hljs-string">"T$"</span></span>,
      "<span class="hljs-attribute">hidden</span>": <span class="hljs-value"><span class="hljs-literal">false</span>
    </span>}</span>,
    "<span class="hljs-attribute">source</span>": <span class="hljs-value">{
      "<span class="hljs-attribute">name</span>": <span class="hljs-value"><span class="hljs-string">"Mobbex Cash"</span></span>,
      "<span class="hljs-attribute">barcode</span>": <span class="hljs-value"><span class="hljs-string">"01020245551481679579548"</span></span>,
      "<span class="hljs-attribute">url</span>": <span class="hljs-value"><span class="hljs-string">"http://mobbex.com/barcode/01020245551481679579548?bcid=interleaved2of5&amp;includetext=1&amp;textxalign=center&amp;textsize=11&amp;includecheck=1"</span>
    </span>}</span>,
    "<span class="hljs-attribute">user</span>": <span class="hljs-value">{
      "<span class="hljs-attribute">name</span>": <span class="hljs-value"><span class="hljs-string">"John"</span></span>,
      "<span class="hljs-attribute">email</span>": <span class="hljs-value"><span class="hljs-string">"John@mobbex.com"</span>
    </span>}
  </span>}
</span>}</code></pre><div style="height: 1px;"></div></div></div></div></div></section><section id="transactions" class="resource-group"><h2 class="group-heading">Transactions <a href="#transactions" class="permalink">&para;</a></h2><div id="transactions-" class="resource"><h3 class="resource-heading">Resource <a href="#transactions-" class="permalink">&nbsp;&para;</a></h3><div id="transactions-post" class="action post"><h4 class="action-heading"><div class="name"></div><a href="#transactions-post" class="method post">POST</a><code class="uri">/2.0/transactions/status</code></h4><p>IPN Endpoint, lets ask for Transaction ID or Transaction Reference</p>
<h4>Example URI</h4><div class="definition"><span class="method post">POST</span>&nbsp;<span class="uri"><span class="hostname">https://api.mobbex.com</span>/2.0/transactions/status</span></div><div class="title"><strong>Request</strong><br/></div><div class="collapse-content"><div class="inner"><h5>Headers</h5><pre><code><span class="hljs-attribute">x-api-key</span>: <span class="hljs-string">CKlmn34BdsatbkpqerIRCkh38KHeihicsa113DFKBC,</span><br><span class="hljs-attribute">x-access-token</span>: <span class="hljs-string">d31f0721-2f85-44e7-bcc6-15e19d1a53cc</span><br><span class="hljs-attribute">Content-Type</span>: <span class="hljs-string">application/json</span></code></pre><div style="height: 1px;"></div><h5>Body</h5><pre><code>{
  "<span class="hljs-attribute">id</span>": <span class="hljs-value"><span class="hljs-string">"some_id"</span></span>,
  "<span class="hljs-attribute">reference</span>": <span class="hljs-value"><span class="hljs-string">"some_reference"</span>
</span>}</code></pre><div style="height: 1px;"></div></div></div><div class="title"><strong>Response&nbsp;&nbsp;<code>200</code></strong><br/></div><div class="collapse-content"><div class="inner"><h5>Headers</h5><pre><code><span class="hljs-attribute">vary</span>: <span class="hljs-string">X-HTTP-Method-Override, Accept-Encoding</span><br><span class="hljs-attribute">access-control-allow-origin</span>: <span class="hljs-string">*</span><br><span class="hljs-attribute">content-type</span>: <span class="hljs-string">application/json; charset=utf-8</span><br><span class="hljs-attribute">date</span>: <span class="hljs-string">Wed, 14 Dec 2016 01:39:39 GMT</span></code></pre><div style="height: 1px;"></div><h5>Body</h5><pre><code>{
  "<span class="hljs-attribute">result</span>": <span class="hljs-value"><span class="hljs-literal">true</span></span>,
  "<span class="hljs-attribute">view</span>": <span class="hljs-value">{
    "<span class="hljs-attribute">type</span>": <span class="hljs-value"><span class="hljs-string">"cash"</span></span>,
    "<span class="hljs-attribute">options</span>": <span class="hljs-value">{
      "<span class="hljs-attribute">barcode</span>": <span class="hljs-value"><span class="hljs-literal">true</span>
    </span>}
  </span>}</span>,
  "<span class="hljs-attribute">payment</span>": <span class="hljs-value">{
    "<span class="hljs-attribute">id</span>": <span class="hljs-value"><span class="hljs-string">"Skfmymm07g"</span></span>,
    "<span class="hljs-attribute">status</span>": <span class="hljs-value">{
      "<span class="hljs-attribute">code</span>": <span class="hljs-value"><span class="hljs-string">"2"</span></span>,
      "<span class="hljs-attribute">text</span>": <span class="hljs-value"><span class="hljs-string">"Waiting"</span></span>,
      "<span class="hljs-attribute">message</span>": <span class="hljs-value"><span class="hljs-string">""</span>
    </span>}</span>,
    "<span class="hljs-attribute">total</span>": <span class="hljs-value"><span class="hljs-number">200</span></span>,
    "<span class="hljs-attribute">currency</span>": <span class="hljs-value">{
      "<span class="hljs-attribute">code</span>": <span class="hljs-value"><span class="hljs-string">"TEST"</span></span>,
      "<span class="hljs-attribute">text</span>": <span class="hljs-value"><span class="hljs-string">"Test Money"</span>
    </span>}</span>,
    "<span class="hljs-attribute">currency_data</span>": <span class="hljs-value">{
      "<span class="hljs-attribute">value</span>": <span class="hljs-value"><span class="hljs-string">"TEST"</span></span>,
      "<span class="hljs-attribute">label</span>": <span class="hljs-value"><span class="hljs-string">"Test Money"</span></span>,
      "<span class="hljs-attribute">symbol</span>": <span class="hljs-value"><span class="hljs-string">"T$"</span></span>,
      "<span class="hljs-attribute">hidden</span>": <span class="hljs-value"><span class="hljs-literal">false</span>
    </span>}</span>,
    "<span class="hljs-attribute">source</span>": <span class="hljs-value">{
      "<span class="hljs-attribute">name</span>": <span class="hljs-value"><span class="hljs-string">"Mobbex Cash"</span></span>,
      "<span class="hljs-attribute">barcode</span>": <span class="hljs-value"><span class="hljs-string">"01020245551481679579548"</span></span>,
      "<span class="hljs-attribute">url</span>": <span class="hljs-value"><span class="hljs-string">"http://mobbex.com/barcode/01020245551481679579548?bcid=interleaved2of5&amp;includetext=1&amp;textxalign=center&amp;textsize=11&amp;includecheck=1"</span>
    </span>}</span>,
    "<span class="hljs-attribute">user</span>": <span class="hljs-value">{
      "<span class="hljs-attribute">name</span>": <span class="hljs-value"><span class="hljs-string">"John"</span></span>,
      "<span class="hljs-attribute">email</span>": <span class="hljs-value"><span class="hljs-string">"John@mobbex.com"</span>
    </span>}
  </span>}
</span>}</code></pre><script>/* eslint-env browser */
/* eslint quotes: [2, "single"] */
'use strict';

/*
  Determine if a string ends with another string.
*/
function endsWith(str, suffix) {
    return str.indexOf(suffix, str.length - suffix.length) !== -1;
}

/*
  Get a list of direct child elements by class name.
*/
function childrenByClass(element, name) {
  var filtered = [];

  for (var i = 0; i < element.children.length; i++) {
    var child = element.children[i];
    var classNames = child.className.split(' ');
    if (classNames.indexOf(name) !== -1) {
      filtered.push(child);
    }
  }

  return filtered;
}

/*
  Get an array [width, height] of the window.
*/
function getWindowDimensions() {
  var w = window,
      d = document,
      e = d.documentElement,
      g = d.body,
      x = w.innerWidth || e.clientWidth || g.clientWidth,
      y = w.innerHeight || e.clientHeight || g.clientHeight;

  return [x, y];
}

/*
  Collapse or show a request/response example.
*/
function toggleCollapseButton(event) {
    var button = event.target.parentNode;
    var content = button.parentNode.nextSibling;
    var inner = content.children[0];

    if (button.className.indexOf('collapse-button') === -1) {
      // Clicked without hitting the right element?
      return;
    }

    if (content.style.maxHeight && content.style.maxHeight !== '0px') {
        // Currently showing, so let's hide it
        button.className = 'collapse-button';
        content.style.maxHeight = '0px';
    } else {
        // Currently hidden, so let's show it
        button.className = 'collapse-button show';
        content.style.maxHeight = inner.offsetHeight + 12 + 'px';
    }
}

function toggleTabButton(event) {
    var i, index;
    var button = event.target;

    // Get index of the current button.
    var buttons = childrenByClass(button.parentNode, 'tab-button');
    for (i = 0; i < buttons.length; i++) {
        if (buttons[i] === button) {
            index = i;
            button.className = 'tab-button active';
        } else {
            buttons[i].className = 'tab-button';
        }
    }

    // Hide other tabs and show this one.
    var tabs = childrenByClass(button.parentNode.parentNode, 'tab');
    for (i = 0; i < tabs.length; i++) {
        if (i === index) {
            tabs[i].style.display = 'block';
        } else {
            tabs[i].style.display = 'none';
        }
    }
}

/*
  Collapse or show a navigation menu. It will not be hidden unless it
  is currently selected or `force` has been passed.
*/
function toggleCollapseNav(event, force) {
    var heading = event.target.parentNode;
    var content = heading.nextSibling;
    var inner = content.children[0];

    if (heading.className.indexOf('heading') === -1) {
      // Clicked without hitting the right element?
      return;
    }

    if (content.style.maxHeight && content.style.maxHeight !== '0px') {
      // Currently showing, so let's hide it, but only if this nav item
      // is already selected. This prevents newly selected items from
      // collapsing in an annoying fashion.
      if (force || window.location.hash && endsWith(event.target.href, window.location.hash)) {
        content.style.maxHeight = '0px';
      }
    } else {
      // Currently hidden, so let's show it
      content.style.maxHeight = inner.offsetHeight + 12 + 'px';
    }
}

/*
  Refresh the page after a live update from the server. This only
  works in live preview mode (using the `--server` parameter).
*/
function refresh(body) {
    document.querySelector('body').className = 'preload';
    document.body.innerHTML = body;

    // Re-initialize the page
    init();
    autoCollapse();

    document.querySelector('body').className = '';
}

/*
  Determine which navigation items should be auto-collapsed to show as many
  as possible on the screen, based on the current window height. This also
  collapses them.
*/
function autoCollapse() {
  var windowHeight = getWindowDimensions()[1];
  var itemsHeight = 64; /* Account for some padding */
  var itemsArray = Array.prototype.slice.call(
    document.querySelectorAll('nav .resource-group .heading'));

  // Get the total height of the navigation items
  itemsArray.forEach(function (item) {
    itemsHeight += item.parentNode.offsetHeight;
  });

  // Should we auto-collapse any nav items? Try to find the smallest item
  // that can be collapsed to show all items on the screen. If not possible,
  // then collapse the largest item and do it again. First, sort the items
  // by height from smallest to largest.
  var sortedItems = itemsArray.sort(function (a, b) {
    return a.parentNode.offsetHeight - b.parentNode.offsetHeight;
  });

  while (sortedItems.length && itemsHeight > windowHeight) {
    for (var i = 0; i < sortedItems.length; i++) {
      // Will collapsing this item help?
      var itemHeight = sortedItems[i].nextSibling.offsetHeight;
      if ((itemsHeight - itemHeight <= windowHeight) || i === sortedItems.length - 1) {
        // It will, so let's collapse it, remove its content height from
        // our total and then remove it from our list of candidates
        // that can be collapsed.
        itemsHeight -= itemHeight;
        toggleCollapseNav({target: sortedItems[i].children[0]}, true);
        sortedItems.splice(i, 1);
        break;
      }
    }
  }
}

/*
  Initialize the interactive functionality of the page.
*/
function init() {
    var i, j;

    // Make collapse buttons clickable
    var buttons = document.querySelectorAll('.collapse-button');
    for (i = 0; i < buttons.length; i++) {
        buttons[i].onclick = toggleCollapseButton;

        // Show by default? Then toggle now.
        if (buttons[i].className.indexOf('show') !== -1) {
            toggleCollapseButton({target: buttons[i].children[0]});
        }
    }

    var responseCodes = document.querySelectorAll('.example-names');
    for (i = 0; i < responseCodes.length; i++) {
        var tabButtons = childrenByClass(responseCodes[i], 'tab-button');
        for (j = 0; j < tabButtons.length; j++) {
            tabButtons[j].onclick = toggleTabButton;

            // Show by default?
            if (j === 0) {
                toggleTabButton({target: tabButtons[j]});
            }
        }
    }

    // Make nav items clickable to collapse/expand their content.
    var navItems = document.querySelectorAll('nav .resource-group .heading');
    for (i = 0; i < navItems.length; i++) {
        navItems[i].onclick = toggleCollapseNav;

        // Show all by default
        toggleCollapseNav({target: navItems[i].children[0]});
    }
}

// Initial call to set up buttons
init();

window.onload = function () {
    autoCollapse();
    // Remove the `preload` class to enable animations
    document.querySelector('body').className = '';
};
</script>