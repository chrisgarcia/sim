<%@ taglib uri="Portal" prefix="Portal" %>
<%@ taglib uri="http://java.sun.com/jstl/core" prefix="c" %> 

<Portal:Pagina funcion="SimReporteAntiguedad">

	<Portal:PaginaNombre titulo="Reporte de saldos y antigŁedad de capital vencido" subtitulo="Consulta del reporte"/>
	
	<Portal:Forma tipo='url' funcion='SimReporteAntiguedad' url="ProcesaReporte?Funcion=SimReporteAntiguedad&TipoReporte=Xls" agregaentorno="false">
		<Portal:FormaSeparador nombre="Filtros"/>
		
              <!--Portal:SelectorCadena etiqueta1='Regional' etiqueta2='Sucursal' etiqueta3='Asesor' control='selector' cveacto='comun' campoclave="ID_REGIONAL" campodescripcion="NOM_REGIONAL"/-->  
			
			<Portal:FormaElemento etiqueta='Regional' control='selector' controlnombre='IdRegional' controlvalor='${param.IdRegional}' editarinicializado='true' obligatorio='false' campoclave="ID_REGIONAL" campodescripcion="NOM_REGIONAL" datosselector='${requestScope.ListaRegional}' evento="onchange=fRegional();"/>
			<Portal:FormaElemento etiqueta='Sucursal' control='selector' controlnombre='IdSucursal' controlvalor='${param.IdSucursal}' editarinicializado='true' obligatorio='false' campoclave="ID_SUCURSAL" campodescripcion="NOM_SUCURSAL" datosselector='${requestScope.ListaSucursal}' evento="onchange=fSucursal();"/>
			<Portal:FormaElemento etiqueta='Asesor' control='selector' controlnombre='CveUsuario' controlvalor='${param.CveUsuario}' editarinicializado='true' obligatorio='false' campoclave="ID_PERSONA" campodescripcion="NOM_COMPLETO" datosselector='${requestScope.ListaAsesor}'/>
	
		<Portal:FormaBotones>
                      <input type="button" name="Imprimir" value="Reporte en Excel" onClick="javascript:fReporteXls();">
                      <input type="button" name="Imprimir" value="Reporte en Pdf" onClick="javascript:fReportePdf();">
        </Portal:FormaBotones>
		
	</Portal:Forma>
	
     <script>
     	 function fRegional(){
     	 	if (document.frmRegistro.IdRegional.value == "null"){
		 		alert("Seleccione una Regional para mostrar sus Sucursales");
		 	}else {
	            document.frmRegistro.action="ProcesaCatalogo?Funcion=SimReporteAntiguedad&OperacionCatalogo=IN&Filtro=Sucursal&IdRegional="+document.frmRegistro.IdRegional.value;
				document.frmRegistro.submit();
			}
         }
     
     	function fSucursal(){
     		if (document.frmRegistro.IdSucursal.value == "null"){
		 		alert("Seleccione una Sucursal para mostrar sus Asesores");
		 	}else {
	            document.frmRegistro.action="ProcesaCatalogo?Funcion=SimReporteAntiguedad&OperacionCatalogo=IN&Filtro=Asesor&IdRegional="+document.frmRegistro.IdRegional.value+"&IdSucursal="+document.frmRegistro.IdSucursal.value;
				document.frmRegistro.submit();
			}
         }
     
         function fReporteXls(){
              url = '/portal/ProcesaReporte?Funcion=SimReporteAntiguedad&TipoReporte=Xls&Bd=MySql&IdRegional='+document.frmRegistro.IdRegional.value+'&IdSucursal='+document.frmRegistro.IdSucursal.value+'&CveUsuario='+document.frmRegistro.CveUsuario.value;
          	  MM_openBrWindow(url,'Reporte','status=yes,scrollbars=yes,resizable=yes,width=700,height=400');
         }
       
      
         function fReportePdf(){
              url = '/portal/ProcesaReporte?Funcion=SimReporteAntiguedad&TipoReporte=Pdf&Bd=MySql&IdRegional='+document.frmRegistro.IdRegional.value+'&IdSucursal='+document.frmRegistro.IdSucursal.value+'&CveUsuario='+document.frmRegistro.CveUsuario.value;
              MM_openBrWindow(url,'Reporte','status=yes,scrollbars=yes,resizable=yes,width=700,height=400');
        }
     </script>
     
</Portal:Pagina>     

