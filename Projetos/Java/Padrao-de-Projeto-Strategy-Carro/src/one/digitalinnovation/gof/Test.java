package one.digitalinnovation.gof;

import one.digitalinnovation.gof.strategy.Comportamento;
import one.digitalinnovation.gof.strategy.ComportamentoRapido;
import one.digitalinnovation.gof.strategy.ComportamentoLento;
import one.digitalinnovation.gof.strategy.ComportamentoNormal;
import one.digitalinnovation.gof.strategy.Carro;

public class Test {

	public static void main(String[] args) {
		
		// Strategy
		
		Comportamento lento = new ComportamentoLento();
		Comportamento normal = new ComportamentoNormal();
		Comportamento rapido = new ComportamentoRapido();
		
		Carro robo = new Carro();
		robo.setComportamento(normal);
		robo.mover();
		robo.mover();
		robo.setComportamento(lento);
		robo.mover();
		robo.setComportamento(rapido);
		robo.mover();
		robo.mover();
		robo.mover();
	}

}
