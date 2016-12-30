---
layout: page
title: Estados
---

<!-- Main -->
<div id="main" class="alt">

<!-- One -->
<section id="one">
	<div class="inner">
		<header class="major">
			<h1>Códigos de Estado</h1>
		</header>

<div markdown="1">
Estados de una transacción en Mobbex:

| Código de Estado | Especificación |  
| --- | --- |  
| 0 | Sin Estado |  
| 1 | Pendiente |  
| 2 | En Espera* |  
| 3 | Autorizada* |  
| 200 | Paga |  
| 300 | Completada |  
| 301 | Liquidada |  
| 400 | Declinada |  
| 401 | Expirada |  
| 600 | Cancelación en proceso |  
| 601 | Cancelada |  
| 500 | Error |  

___* Aclaraciones___<br/>
__En Espera__: suele utilizarse para operaciones de tipo Efectivo que están a la espera de su pago.<br/>
__Autorizada__: Se utiliza en pagos con Tarjeta en modo Autorización. Este tipo de transacciones está a la espera de ser capturada.

</div>

</div>
</section>

</div>
