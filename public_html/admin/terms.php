<?
if ($_GET['a'] == 1) {
    $stmt = $conn->prepare('INSERT INTO terms (user, ip, created_at) VALUES(:u, :i, :c)');
    $stmt->execute(array(
        ':u' => $dados['nick'],
        ':i' => $_SERVER["REMOTE_ADDR"],
        ':c' => time()
    ));

    echo '<script>document.location.href="index.php";</script>';
}
?>

<style>
    .containerTerms {
        width: 100%;
        position: relative;
        margin-top: 50px;
    }

    .containerTerms .modal-terms {
        border-radius: 5px;
        overflow-y: auto;
        padding: 30px;
        max-height: 500px;
        height: 100%;
        background-color: #FFF;
        border: 1px solid #e6e5e5;
    }

    .containerTerms h1, .containerTerms h3 {
        text-align: center;
    }

    .containerTerms p {
        line-height: 25px;
        font-size: 16px;
        margin-bottom: 15px;
    }

    .containerTerms h2 {
        margin-bottom: 10px;
    }

    .containerTerms ul {
        margin-left: 35px;
        margin-bottom: 20px;
    }

    .containerTerms .based-input {
        margin-top: 15px;
    }

    .containerTerms .based-btns {
        display: flex;
        justify-content: space-between;
        margin-top: 15px;
    }

    .containerTerms .based-btns .btn {
        height: 46px;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
        font-weight: 700;
        padding: 0 20px;
        transition: opacity 0.2s;
    }

    .containerTerms .based-btns .btn:hover {
        opacity: 0.7;
    }

    .containerTerms .based-btns .btn:active {
        opacity 0.5;
    }

    .containerTerms .btn-read {
        background-color: #B90A00;
        color: #FFF;
        opacity: 0.5;
        pointer-events: none;
    }

    .containerTerms .btn-read.active {
        opacity: 1;
        pointer-events: all;
    }

    .containerTerms .btn-download {
        color: #B90A00;
        background-color: #FFF;
        border: 1px solid #e6e5e5;
    }
    
    .containerTerms label {
        margin-top: 25px;
        font-weight: 400;
    }
    @media (max-width: 990px) {
        .containerTerms .based-btns {
            display: grid;
            gap: 10px;
            grid-template-columns: 1fr;
        }
        
        .containerTerms .based-btns .btn {
            width: 100%;
        }
        
        .containerTerms .modal-terms {
            max-height: unset;
            overflow-y: unset;
        }
    }
</style>

<div class="containerTerms">
    <div class="modal-terms">
        <h1>TERMO DE USO</h1>
        <h3>CONTRATO DE CONCESSÃO DE USO DE UM CARDÁPIO ON-LINE COM SISTEMA DE AUTO GESTÃO</h3>
        <br>

        <p>Os seguintes termos e condições regulam o direito de uso de um cardápio on-line com sistema de Auto-Gestão.</p>
        <p>Das partes:</p>

        <span><strong>CONTRATANTE:</strong></span>
        <p>A pessoa física ou jurídica identificada na página de cadastramento.</p>

        <span><strong>CONTRATADO</strong></span>
        <p>A empresa que liberou esse acesso ao sistema ao contratante.</p>

        <br />
        <h3>Cláusula Primeira - do Objeto do Contrato</h3>

        <p>1.0) Disponibilização de um Sistema Administrativo de Auto Gestão, por CONCESSÃO, num cardápio on-line, que será desenvolvido pelo CONTRATADO e publicado na Internet através do domínio WWW.NOME_DO_RESTAURANTE.SUBDOMINIO.APP/, sob administração do próprio.</p>
        <p>1.1) O desenvolvimento do cardápio on-line que será disponibilizado sob CONCESSÃO ao CONTRATANTE não implica na obrigação, imediata ou a qualquer tempo, de entrega do código fonte que deu origem ao produto e que se converte em propriedade intelectual do CONTRATADO;</p>
        <p>1.2) Os serviços ora avençados, concernentes às viabilidades do comércio, anúncio e/ ou divulgação dos produtos e serviços do CONTRATANTE na Internet estarão disponíveis 24 (vinte e quatro) horas por dia, durante o prazo de vigência do presente contrato, salvo quando o serviço de hospedagem apresentar alguma indisponibilidade ou por qualquer outra razão que não implique em culpa do CONTRATADO;</p>
        <p>1.3) O CONTRATADO fornecerá uma senha para acesso ao painel administrativo do cardápio on-line, cuja atualização será de exclusiva responsabilidade do CONTRATANTE, bem como qualquer conteúdo diferente daquele originalmente previsto ou mesmo que venha a ferir qualquer dispositivo legal.</p>
        <p>1.4) Uma vez publicado, o cardápio on-line será considerado totalmente acabado e entregue, a partir do que quaisquer alterações ou acréscimos pretendidos pelo CONTRATANTE serão objeto de análise e prévia aprovação do novo projeto, independentemente da sua complexidade, estabelecendo-se o respectivo custo, que deverá ser autorizado para cobrança na forma que venha a ser convencionada;</p>
        <p>
            1.5) Após o desenvolvimento do cardápio on-line estão compreendidos:

        <ul>
            <li>- Orientação para uso do produto;</li>
            <li>- Suporte para dúvidas via WhatsApp, de segunda à sexta feira, no período das 10h00 às 18h00.</li>
            <li>- Suporte para emergências via WhatsApp, todos os dias, no período das 18h00 ás 22h00.</li>
        </ul>

        § 1º. - Não será possível a recuperação de dados de responsabilidade do CONTRATANTE na manipulação do cardápio on-line, por erro ou mau uso do sistema, em razão de total impossibilidade técnica.
        </p>

        <br />
        <h3>Cláusula Segunda – do Preço e Forma de Pagamento:</h3>

        <p>2.0) O CONTRATANTE pagará à CONTRATADA, mensalmente a partir da data de aceite deste contrato à título de hospedagem e suporte a quantia equivalente ao plano selecionado no momento do aceite deste e informado no painel administrativo do cardápio on-line, podendo ser trocado para um maior de acordo com sua necessidade.</p>
        <p>2.1) Todos os planos poderão ser corrigidos anualmente todo o mês de Janeiro;</p>
        <p>2.2) Em caso de atraso no pagamento fica estipulada a multa de 2% (dois por cento), juros de 1% ao mês e correção monetária, podendo valer-se a CONTRATADA dos meios próprios para exercer a cobrança;</p>
        <p>2.2) O atraso no pagamento da mensalidade descrita acarretará, a partir do 3º. (terceiro) dia de atraso, na suspensão de uso do cardápio on-line, cuja publicidade somente será restabelecida após o seu efetivo pagamento, independentemente de qualquer aviso, notificação ou interpelação Judicial ou extrajudicial;</p>
        <p>2.3) Na hipótese de 10 (dez) dias de atraso, o presente Contrato será rescindido, caso em que o direito de uso do cardápio on-line será definitivamente inviabilizado, acarretando, ainda, a sua extinção, sem qualquer obrigação de indenizar por parte da CONTRATADA, seja por perdas e danos ou lucros cessantes.</p>
        <p>2.4) Na hipótese de eventual demanda judicial, arcará a parte culpada com as custas processuais e honorários advocatícios.</p>

        <br />
        <h3>Cláusula Terceira - da Vigência e Rescisão</h3>

        <p>3.0) O presente Contrato terá-a-vigência de 30 (trinta) dias contando a partir do aceite, prorrogando-se automaticamente por iguais períodos, salvo se uma das partes renunciá-lo, mediante aviso por mensagem, com pelo menos 3 (três) dias de antecedência.</p>

        <br />
        <h3>Cláusula Quarta - Disposições Gerais</h3>

        <p>4.0) O CONTRATADO terá o prazo de 1 (um) dias, após aceite do presente contrato, para disponibilização do acesso ao cardápio on-line no endereço nomedaloja.subdominio.app/admin.</p>
        <p>4.1) O CONTRATANTE será o único responsável pelo cumprimento das legislações pertinentes a relação de consumo e as demais atinentes aos produtos/serviços por quaisquer das partes sem o aviso prévio por escrito, da outra parte;</p>
        <p>4.2) O presente contrato obrigará as partes, seus representantes sucessores e cessionários autorizados, não podendo ser cedido, total ou parcialmente, por qualquer das partes sem o aviso prévio por escrito, da outra parte, excetuando-se a hipótese de inadimplência, conforme descrito na Cláusula 2.2;</p>
        <p>4.3) O cardápio on-line será utilizada pelo CONTRATANTE como ferramenta para o desenvolvimento de sua atividade profissional/objeto social. Assim, como o CONTRATANTE não é o destinatário final do objeto contratado, não se aplica ao presente negócio jurídico o Código de Defesa do Consumidor, mas sim o Código Civil em especial Artigos 593 a 609.</p>
        <p>4.4) Na hipótese do CONTRATANTE constatar qualquer problema no cardápio on-line deverá, necessariamente, comunicar, por escrito, através de carta com aviso de recebimento (A.R.), sendo reservado a este o prazo de 15 (quinze) dias para a efetiva constatação do problema e sua solução, se for o caso, não sendo possível a solução do problema efetivamente reconhecido pelo contratado, o contrato será rescindido, restituindo-se somente a ultima mensalidade paga proporcional ao tempo de não uso efetivo do sistema.</p>
        <p>4.5) As partes elegem o foro da comarca de São José dos Campos-SP, para dirimir dúvidas ou litígios oriundos do presente instrumento, com exclusão de qualquer outro, por mais privilegiado que seja. E, por estar justo e contratado, aceitam eletronicamente a presente, para que surtam os efeitos legais.</p>
    </div>
    
    <label>Ao marcar clicar no botão, você automaticamente concorda com o contrato de concessão e todos os termos de uso descritos acima.</label>

    <div class="based-btns">
        <a href="?a=1" class="btn btn-read">Concordar com os termos</a>
    </div>
</div>

<script>
    const modalTerms = document.querySelector(".modal-terms")
    const buttonRead = document.querySelector(".btn-read")
    const input = document.querySelector(".input")
    
    if(window.innerWidth > 990) {
        modalTerms.addEventListener("scroll", function(e) {
            const modalEvent = e.target
            const scrollTotal = modalEvent.scrollTop + modalEvent.clientHeight
    
            if (scrollTotal == modalEvent.scrollHeight) {
                buttonRead.classList.add("active")
            } else {
                buttonRead.classList.remove("active")
            }
        })
    } else {
        buttonRead.classList.add("active")
    }
</script>