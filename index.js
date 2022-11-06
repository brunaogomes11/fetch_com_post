import fetch from "node-fetch";

(async () => {
    const rawResponse = await fetch('https://granto-api.herokuapp.com/testar', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "Genero":0,
        "Idade":15,
        "Debito":15,
        "Casado":1,
        "Possui_Conta_Banco":0,
        "Tipo_Industria":13,
        "Etnia":1,
        "Anos_Empregado":0,
        "Inadimplente":0,
        "Empregado":0,
        "Pontuacao_Credito":0,
        "Habilitado":0,
        "Cidadania":0,
        "Codigo_Postal":200,
        "Renda":0
    })
    });
    const content = await rawResponse.json();
  
    console.log(content);
  })();