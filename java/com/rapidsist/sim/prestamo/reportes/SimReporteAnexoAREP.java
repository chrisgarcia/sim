/**
 * Sistema Central de Control.
 *
 */

package com.rapidsist.sim.prestamo.reportes;

import com.rapidsist.portal.cliente.reportes.ReporteControlIN;
import java.util.Map;
import java.util.Date;
import java.util.HashMap;
import com.rapidsist.comun.util.Fecha2;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.ServletContext;
import com.rapidsist.portal.catalogos.CatalogoSL;
import javax.naming.Context;
import com.rapidsist.comun.bd.Registro;

/**
 * Esta clase se encarga de administrar la operaci�n consulta del Reporte Anexo A
 * Esta clase es llamada por el servlet ProcesaReporteS.
 */

public class SimReporteAnexoAREP implements ReporteControlIN {

	public Map getParametros(Registro parametrosCatalogo, HttpServletRequest request, CatalogoSL catalogoSL, Context contextoServidor, ServletContext contextoServlet)  throws Exception{
		Map parametros = new HashMap();

		String sSql =   "SELECT \n"+
						"C.CVE_GPO_EMPRESA, \n"+
						"C.CVE_EMPRESA, \n"+
						"C.ID_PRESTAMO, \n"+
						"C.CVE_NOMBRE ID_CLIENTE, \n"+ 
						"C.ID_PRODUCTO, \n"+
						"C.NUM_CICLO, \n"+
						"TO_CHAR(TO_DATE(C.FECHA_ENTREGA),'DD \"de\" MONTH \"de\" YYYY') FECHA_ENTREGA, \n"+
						"C.NOMBRE NOM_COMPLETO, \n"+ 
						"TO_CHAR(C.MONTO_AUTORIZADO + C.CARGO_INICIAL,'999,999,999.99') MONTO_AUTORIZADO, \n"+ 
						"CANTIDADES_LETRAS(C.MONTO_AUTORIZADO + C.CARGO_INICIAL) MONTO_AUTORIZADO_LETRAS, \n"+ 
						"C.VALOR_TASA, \n"+
						"C.VALOR_TASA * 12 AS TASA_ANUAL, \n"+ 
						"C.PERIODICIDAD_PRODUCTO, \n"+ 
						"C.CARGO_INICIAL CONSULTA_BURO, \n"+ 
						"NVL(NVL(CA.CARGO_INICIAL,CA.PORCENTAJE_MONTO/100*C.MONTO_AUTORIZADO),0) COMISION_APERTURA, \n"+
						"TO_CHAR(TO_DATE(C.FECHA_FIN),'DD \"de\" MONTH \"de\" YYYY') FECHA_FIN, \n"+
						"C.PLAZO, \n"+
						"C.ID_SUCURSAL, \n"+ 
						"C.DIRECCION_SUCURSAL, \n"+ 
						"C.MONTO_FIJO_PERIODO, \n"+
						"CANTIDADES_LETRAS(C.MONTO_FIJO_PERIODO) MONTO_FIJO_PERIODO_LETRAS, \n"+
						"PA.ID_PERSONA ID_AVAL, \n"+
						"DECODE(PPA.NOM_COMPLETO,'',' ',PPA.NOM_COMPLETO) NOM_AVAL, \n"+
						"PD.ID_PERSONA ID_DEPOSITARIO, \n"+
						"DECODE(PPD.NOM_COMPLETO,'',' ',PPD.NOM_COMPLETO) NOM_DEPOSITARIO, \n"+ 
						"PG.ID_PERSONA ID_GARANTE, \n"+
						"DECODE(PPG.NOM_COMPLETO,'',' ',PPG.NOM_COMPLETO) NOM_GARANTE \n"+  
						"FROM \n"+
						"V_CREDITO C, \n"+
						"SIM_PRESTAMO_CARGO_COMISION CA, \n"+
						"SIM_PRESTAMO_PARTICIPANTE PA, \n"+
						"RS_GRAL_PERSONA PPA, \n"+
						"SIM_PRESTAMO_PARTICIPANTE PD, \n"+ 
						"RS_GRAL_PERSONA PPD, \n"+
						"SIM_PRESTAMO_PARTICIPANTE PG, \n"+ 
						"RS_GRAL_PERSONA PPG \n"+
						"WHERE C.CVE_GPO_EMPRESA = 'SIM' \n"+ 
						"AND C.CVE_EMPRESA = 'CREDICONFIA' \n"+
						"AND C.ID_PRESTAMO = '" + request.getParameter("IdPrestamo")+"' \n"+
						"AND C.APLICA_A = 'INDIVIDUAL' \n"+
						"AND CA.CVE_GPO_EMPRESA (+)= C.CVE_GPO_EMPRESA \n"+ 
						"AND CA.CVE_EMPRESA (+)= C.CVE_EMPRESA \n"+
						"AND CA.ID_PRESTAMO (+)= C.ID_PRESTAMO \n"+
						"AND CA.ID_CARGO_COMISION (+)= '11' \n"+
						"AND PA.CVE_GPO_EMPRESA (+)= C.CVE_GPO_EMPRESA \n"+ 
						"AND PA.CVE_EMPRESA (+)= C.CVE_EMPRESA \n"+
						"AND PA.ID_PRESTAMO (+)= C.ID_PRESTAMO \n"+
						"AND PA.CVE_TIPO_PERSONA (+)= 'AVAL' \n"+
						"AND PPA.CVE_GPO_EMPRESA (+)= PA.CVE_GPO_EMPRESA \n"+ 
						"AND PPA.CVE_EMPRESA (+)= PA.CVE_EMPRESA \n"+
						"AND PPA.ID_PERSONA (+)= PA.ID_PERSONA \n"+
						"AND PD.CVE_GPO_EMPRESA (+)= C.CVE_GPO_EMPRESA \n"+ 
						"AND PD.CVE_EMPRESA (+)= C.CVE_EMPRESA \n"+
						"AND PD.ID_PRESTAMO (+)= C.ID_PRESTAMO \n"+
						"AND PD.CVE_TIPO_PERSONA (+)= 'DEPOSIT' \n"+
						"AND PPD.CVE_GPO_EMPRESA (+)= PD.CVE_GPO_EMPRESA \n"+ 
						"AND PPD.CVE_EMPRESA (+)= PD.CVE_EMPRESA \n"+
						"AND PPD.ID_PERSONA (+)= PD.ID_PERSONA \n"+
						"AND PG.CVE_GPO_EMPRESA (+)= C.CVE_GPO_EMPRESA \n"+ 
						"AND PG.CVE_EMPRESA (+)= C.CVE_EMPRESA \n"+
						"AND PG.ID_PRESTAMO (+)= C.ID_PRESTAMO \n"+
						"AND PG.CVE_TIPO_PERSONA (+)= 'GARANTE' \n"+
						"AND PPG.CVE_GPO_EMPRESA (+)= PG.CVE_GPO_EMPRESA \n"+ 
						"AND PPG.CVE_EMPRESA (+)= PG.CVE_EMPRESA \n"+
						"AND PPG.ID_PERSONA (+)= PG.ID_PERSONA \n";
		
		System.out.println("sSql"+sSql);
		
		parametros.put("Sql", sSql);
		parametros.put("PathLogotipo", contextoServlet.getRealPath("/Portales/Sim/CrediConfia/img/CrediConfia.bmp"));
		parametros.put("FechaReporte", Fecha2.formatoCorporativoHora(new Date()));
		parametros.put("NomReporte", "/Reportes/Sim/prestamo/SimReporteAnexoANuevo.jasper");
		parametros.put("Subreporte1", contextoServlet.getRealPath("/Reportes/Sim/prestamo/SimReporteAnexoANuevo_Sub1.jasper"));
		parametros.put("Subreporte2", contextoServlet.getRealPath("/Reportes/Sim/prestamo/SimReporteAnexoA.jasper"));
		parametros.put("Subreporte3", contextoServlet.getRealPath("/Reportes/Sim/prestamo/SimReporteAnexoA2.jasper"));
		return parametros;		
	}
}