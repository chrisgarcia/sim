<%@ taglib uri="Portal" prefix="Portal" %>
<%@ taglib uri="http://java.sun.com/jstl/core" prefix="c" %> 
<Portal:Pagina funcion="SimPrestamoCreditosPersonales">
	<Portal:PaginaNombre titulo="Cr�ditos del cliente" subtitulo="Consulta de datos"/>
	
	<Portal:Forma tipo='busqueda' funcion='SimPrestamoCreditosPersonales' operacion='CT' filtro='Todos'>
		<Portal:FormaElemento etiqueta='Clave del Cliente' control='Texto' controlnombre='CveNombre' controllongitud='6' controllongitudmax='18' editarinicializado='true'/>
		<Portal:FormaElemento etiqueta='Nombre' control='Texto' controlnombre='Nombre' controllongitud='40' controllongitudmax='60' editarinicializado='true'/>
		<input type="hidden" name="TxRespuesta" value='<c:out value='${param.Respuesta}'/>' />
	</Portal:Forma>
	
	<Portal:TablaForma nombre="Consulta de Cr�ditos del cliente" funcion="SimPrestamoCreditosPersonales" operacion="CT" parametros="&Filtro=Todos">
		<Portal:TablaListaTitulos> 
			<Portal:Columna tipovalor='texto' ancho='100' valor=''/>
			<Portal:Columna tipovalor='texto' ancho='100' valor='Clave'/>
			<Portal:Columna tipovalor='texto' ancho='80' valor='Producto'/>	
			<Portal:Columna tipovalor='texto' ancho='50' valor='Ciclo'/>	
			<Portal:Columna tipovalor='texto' ancho='100' valor='Fecha de entrega'/>	
			<Portal:Columna tipovalor='texto' ancho='100' valor='Fecha de real'/>	
			<Portal:Columna tipovalor='texto' ancho='200' valor='Nombre'/>	
			<Portal:Columna tipovalor='texto' ancho='100' valor='Estatus del pr&eacute;stamo'/>
			<Portal:Columna tipovalor='texto' ancho='100' valor='Clave del Asesor'/>	
			<Portal:Columna tipovalor='texto' ancho='100%' valor='Clave de la Sucursal'/>
			
		</Portal:TablaListaTitulos>
		<c:forEach var="registro" items="${requestScope.ListaBusqueda}">		
			<Portal:TablaListaRenglon>
				<c:if test='${(registro.campos["ID_ETAPA_PRESTAMO"] == "7")}'>
					<Portal:Columna tipovalor='texto' ancho='80' valor=''>	
						<input type="button" name="Liquidacion"  value="Liquidaci�n por defunci�n" onclick='javascript:fLiquidacionDefuncion(<c:out value='${registro.campos["ID_PRESTAMO"]}'/>)'>
					</Portal:Columna>
				</c:if>
				<c:if test='${(registro.campos["ID_ETAPA_PRESTAMO"] != "7")}'>
					<Portal:Columna tipovalor='texto' ancho='80' valor=''>	
					</Portal:Columna>
				</c:if>
				<Portal:Columna tipovalor='texto' ancho='100' valor='${registro.campos["CVE_PRESTAMO"]}'/>
				<Portal:Columna tipovalor='texto' ancho='80' valor='${registro.campos["ID_PRODUCTO"]}'/>
				<Portal:Columna tipovalor='texto' ancho='50' valor='${registro.campos["NUM_CICLO"]}'/>
				<Portal:Columna tipovalor='texto' ancho='100' valor='${registro.campos["FECHA_ENTREGA"]}'/>
				<Portal:Columna tipovalor='texto' ancho='100' valor='${registro.campos["FECHA_REAL"]}'/>
				<Portal:Columna tipovalor='texto' ancho='200' valor='${registro.campos["NOMBRE"]}'/>
				<Portal:Columna tipovalor='texto' ancho='100' valor='${registro.campos["NOM_ESTATUS_PRESTAMO"]}'/>
				<Portal:Columna tipovalor='texto' ancho='100' valor='${registro.campos["CVE_ASESOR_CREDITO"]}'/>
				<Portal:Columna tipovalor='texto' ancho='100%' valor='${registro.campos["ID_SUCURSAL"]}'/>
			</Portal:TablaListaRenglon>
		</c:forEach>	
	</Portal:TablaForma>
	
	<script>
	
		function fLiquidacionDefuncion(sIdPrestamo){
			MM_openBrWindow('/portal/ProcesaCatalogo?Funcion=SimPrestamoLiquidacionDefuncion&OperacionCatalogo=IN&Filtro=Alta&Ventana=Si&GoBackPl=No&IdPrestamo='+sIdPrestamo,'VentanaLp','scrollbars=yes,resizable=yes,width=500,height=300');
		}
		
	</script>
		
</Portal:Pagina>
