/**
 * Sistema de administraci�n de portales.
 *
 * Copyright (c) 2008 Rapidisist S.A de C.V. Todos los derechos reservados
 */

package com.rapidsist.sim.prestamo.cliente;

import com.rapidsist.comun.bd.Registro;
import com.rapidsist.portal.catalogos.CatalogoSL;
import com.rapidsist.portal.cliente.CatalogoControlConsultaIN;
import com.rapidsist.portal.cliente.RegistroControl;
import javax.naming.Context;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.ServletConfig;
import java.rmi.RemoteException;



/**
 * Esta clase se encarga de administrar las operaciones (alta, baja,
 * modificaci�n y consulta) de la paginaci�n en la consulta de los cr�ditos personales. Esta clase es llamada por
 * el servlet {@link CatalogoS CatalogoS}.
 */
public class SimPrestamoCreditosPersonalesPaginacionCON implements CatalogoControlConsultaIN {

	/**
	 * Ejecuta los servicios de consulta del cat�logo.
	 * @param parametros Par�metros que se recogen de la sesion del usuario y se le envian a la clase CON.
	 * Estos par�metros son: CVE_GPO_EMPRESA (Clave del grupo empresa), Filtro (el valor
	 * del filtro que se debe aplicar solo si se ejecuto el componente de cat�logos con
	 * OperacionCatalogo=CT)
	 * @param request Objeto que provee de informaci�n al servlet sobre el request del cliente. El
	 * contenedor de servlets crea un objeto HttpServletRequest y lo env�a como un par�metro a este m�todo.
	 * @param response Objeto que provee de informaci�n del servlet sobre el response del cliente. El
	 * contenedor de servlets crea un objeto HttpServletResponse y lo env�a como un par�metro a este m�todo.
	 * @param config Objeto que provee de informaci�n del servlet sobre el ServletConfig del cliente. El
	 * contenedor de servlets crea un objeto ServletConfig y lo env�a como un par�metro a este m�todo.
	 * @param catalogoSL Instancia del Ejb CatalogoSL que ejecuta en la base de datos las
	 * operaciones especificadas en la clase CON
	 * @param contexto Objeto que contiene informaci�n acerca del entorno del servidor de
	 * aplicaciones.
	 * @param iTipoOperacion Operaci�n que debe ejecutar la clase CON. Las operaciones se encuentran
	 * especificadas en la clase {@link com.rapidsist.portal.cliente.CatalogoControl CatalogoControl}
	 * @return Resultado de la consulta y la p�gina a donde se redirecciona el control.
	 * @throws RemoteException Si se gener� un error en el Ejb CatalogoSL.
	 * @throws java.lang.Exception Si se gener� un error dentro de la clase CON.
	 */
	public RegistroControl consulta(Registro parametros, HttpServletRequest request, HttpServletResponse response, ServletConfig config, CatalogoSL catalogoSL, Context contexto, int iTipoOperacion)throws RemoteException, Exception{
		RegistroControl registroControl = new RegistroControl();
		//VERIFICA SI BUSCA TODOS LOS REGISTROS
		if (iTipoOperacion == CON_CONSULTA_TABLA){
			
			//VERIFICA SI SE ENVIO EL PARAMETRO NOMBRE
			if (request.getParameter("CveNombre") != null && !request.getParameter("CveNombre").equals("")){
				parametros.addDefCampo("CVE_NOMBRE", request.getParameter("CveNombre"));
			}
			if (request.getParameter("Nombre") != null && !request.getParameter("Nombre").equals("")){
				parametros.addDefCampo("NOMBRE", request.getParameter("Nombre"));
			}
			
			String sPagina = request.getParameter("Paginas");
			int iPagina = Integer.parseInt(sPagina);
			iPagina --;
			String sPaginas = String.valueOf(iPagina);
			String sSuperior = request.getParameter("Superior");
			int iSuperior = Integer.parseInt(sSuperior);
			int iInferior = iSuperior;
			iSuperior = iSuperior + 100;
			String sInferior = String.valueOf(iInferior);
			sSuperior = String.valueOf(iSuperior);
			
			parametros.addDefCampo("SUPERIOR", sSuperior);
			parametros.addDefCampo("INFERIOR", sInferior);
			
			registroControl.respuesta.addDefCampo("ListaPrestamoCreditosPersonalesPaginacion", catalogoSL.getRegistros("SimPrestamoCreditosPersonalesPaginacion", parametros));
			
			registroControl.sPagina = "/Aplicaciones/Sim/Prestamo/fSimPreCrePerPag.jsp?Paginas="+sPaginas+"&Superior="+sSuperior+"&CveNombre="+request.getParameter("CveNombre")+"&Nombre="+request.getParameter("Nombre");
		}
			
		return registroControl;
	}
}