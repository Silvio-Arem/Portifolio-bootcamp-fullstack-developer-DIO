package one.digitalinnovation.gof.strategy;

public class ComportamentoRapido implements Comportamento {

	@Override
	public void mover() {
		System.out.println("Movendo-se rapidamente...");
	}

}
