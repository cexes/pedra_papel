
      var computador
           
        function ler(acao, pc){
                document.getElementById('segunda_tela').value = acao
                if(pc ===0 || pc===1){
                computador = document.getElementById('tela').value = 'pedra'}
                    else if(pc===2 || pc ==3)  
                computador = document.getElementById('tela').value = 'papel'
                
                    else if(pc === 4){
                computador = document.getElementById('tela').value = 'tesoura'
                }
              
              if(acao === computador){//empate
                    document.getElementById('resultado').value = "Empate"   
                    //Jogador
                }  if(acao==="pedra"&& computador==="tesoura"){
                    document.getElementById('resultado').value = "Jogador Ganhou"      
                }  if(acao ==="tesoura"&&computador==="papel"){
                    document.getElementById('resultado').value = "Jogador Ganhou"}
                    if(acao ==="papel"&& computador ==="pedra"){
                        document.getElementById('resultado').value = "Jogador Ganhou"
                    }if(acao==="tesoura"&&computador==="papel"){
                        document.getElementById('result').value = "Jogador Ganhou"
                    }
                 //Computador
                 if(computador ==="tesoura"&& acao==="papel"){
                  document.getElementById('resultado').value = "Computador Ganhou"}
                 if(computador ==="papel"&& acao ==="pedra"){
                     document.getElementById('resultado').value = "Computador Ganhou"
                 }if(computador==="tesoura"&&acao==="papel"){
                     document.getElementById('result').value = "Computador Ganhou"
                 } if(computador ==="pedra"&& acao ==="tesoura"){
                     document.getElementById('resultado').value ="Computador Ganhou"
                 }
                }
            

