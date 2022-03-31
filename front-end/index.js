const getInformationServer = async () => {
    //Receita ou despesa
    const select = document.getElementById('tipo')
    const selectOption = select.options[select.selectedIndex].text

    //Descrição
    const description = document.getElementById('descricao').value

    //Valor informado
    const informedValue = document.getElementById('valor').value

    //Valor desconto
    const discountValue = document.getElementById('valor_desconto').value

    //Data de Vencimento
    const dueDate = document.getElementById('data_venc').value

    //Data Liquidação
    const settlementDate = document.getElementById('data_liq').value

    const data = {
        selectOption,
        description,
        informedValue,
        discountValue,
        dueDate,
        settlementDate
    }
    fetch("http://localhost:3000", {
        method: "post",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      
        body: JSON.stringify({
          data
        })
      })
      .then( (response) => { 
        console.log(response)
      });

}
