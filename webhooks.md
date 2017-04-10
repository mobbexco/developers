---
layout: page
title: Webhooks
---

<!-- Main -->
<div id="main" class="alt">

<!-- One -->
<section id="one">
	<div class="inner">
		<header class="major">
			<h1>Webhooks</h1>
		</header>

<div markdown="1">

___Qué es un Webbook___  
Un webhook es un mecanismo mediante el cual Mobbex será capaz de notificar mediante HTTP POST a su servidor cuando una transacción sea realizada o cambie de estado, así usted podrá tomar las acciones necesarias en su sistema al efecto de reflejar el nuevo estado de una operación.

***Tipos de WebHooks***

___De Aplicación___  
Cuando crea una aplicación, Mobbex le permite definir un webhook al cual se enviarán todos los estados de las transacciones.

___WebCheckout___  
Cuando crea un checkout mediante el API de Mobbex usted puede definir una url capaz de recibir una llamada HTTP POST mediante la cual se le va a notificar los cambios en el estado de la transacción específica.

___Ejemplo de Contenido enviado en un WebHook___

Headers:<br/>
```Content-Type```: ```application/json```

Contenido:<br/>
<pre><code>
{
    "url": "https://myapp.com/webhooks",
    "method": "POST",
    "form": {
        "type": "payment",
        "data": {
            "result": true,
            "view": {
                "type": "card",
                "options": {
                    "data": [
                        {
                            "label": "Orden Nro.",
                            "value": "rkWpX3YU6x"
                        },
                        {
                            "label": "Identificador de transacción",
                            "value": "73198584"
                        }
                    ]
                }
            },
            "payment": {
                "id": "rkWpX3YU6x",
                "operation": {
                    "type": "payment"
                },
                "status": {
                    "code": "200",
                    "text": "Paid",
                    "message": "APROBADA - Autorizada"
                },
                "total": 1907.5,
                "currency": {
                    "code": "ARS",
                    "text": "Peso Argentino"
                },
                "currency_data": {
                    "value": "ARS",
                    "label": "Peso Argentino",
                    "symbol": "$",
                    "hidden": false
                },
                "source": {
                    "name": "Visa",
                    "type": "card",
                    "number": "454642xxxxxx7787",
                    "installment": {
                        "description": "3 Cuotas",
                        "amount": 635.83,
                        "count": 3
                    }
                },
                "user": {
                    "name": "Juan Perez",
                    "email": "juanperez@mobbex.com"
                },
                "reference": "HyjdiK8Tx"
            }
        }
    }
}
</code></pre>


***Más Detalles***
- <a href="http://localhost:4000/statuses">Estados y Tipos de Transacción</a>

</div>

</div>
</section>

</div>
