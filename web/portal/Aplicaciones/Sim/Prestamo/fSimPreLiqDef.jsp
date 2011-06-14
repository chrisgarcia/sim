<%@ taglib uri="Portal" prefix="Portal" %>
<%@ taglib uri="http://java.sun.com/jstl/core" prefix="c" %> 
<Portal:Pagina funcion="SimPrestamoLiquidacionDefuncion">
	<Portal:PaginaNombre titulo="Liquidaci�n por defunci�n" subtitulo=""/>
	
	
<Portal:Forma tipo='catalogo' funcion='SimPrestamoLiquidacionDefuncion' >

		<Portal:FormaSeparador nombre="Liquidaci�n por defunci�n"/>
		<Portal:Calendario2 etiqueta='Fecha de aplicaci�n' contenedor='frmRegistro' controlnombre='FechaMovimiento' controlvalor=''  esfechasis='true'/>
		<input type="hidden" name="TxRespuesta" value='<c:out value='${param.Respuesta}'/>' />
		<input type="hidden" name="GoBackPl" value='<c:out value='${param.GoBackPl}'/>' />
		<input type="hidden" name="IdPrestamo" value='<c:out value='${param.IdPrestamo}'/>' />
		<Portal:FormaBotones>
			<input type='button' name='Liquidacion' value='Liquidaci�n' onClick='fLiquidacionDefuncion()'/>
		</Portal:FormaBotones>
	</Portal:Forma>	
	
	<script>
	
		function fLiquidacionDefuncion(){
			document.frmRegistro.Liquidacion.disabled = true; 
			document.frmRegistro.action="ProcesaCatalogo?Funcion=SimPrestamoLiquidacionDefuncion&OperacionCatalogo=AL&IdPrestamo="+document.frmRegistro.IdPrestamo.value+"&Fecha="+document.frmRegistro.FechaMovimiento.value;
			document.frmRegistro.submit();
			
		}
		
		if(document.frmRegistro.TxRespuesta.value != 'null' && document.frmRegistro.TxRespuesta.value != ''){
			alert(document.frmRegistro.TxRespuesta.value);
		} 
		
		if(document.frmRegistro.GoBackPl.value == 'Si'){
			window.opener.document.frmRegistro.submit();
			window.close();
		} 	
	</script>
</Portal:Pagina>



