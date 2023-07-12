const questoes = [
    {
      id: 1,
      pergunta: '<p> Qual é o nome da organela celular responsável pela produção de ATP?</p>',
      img: 'https://saude.abril.com.br/wp-content/uploads/2022/04/mitocondria.png?w=680&h=453&crop=1',
      respostas: [
        {
          id: 1.1,
          texto: 'Mitocôndria',
          correta: true
        },
        {
          id: 1.2,
          texto: 'Lisossomo',
          correta: false
        },
        {
          id: 1.3,
          texto: 'Complexo de Golgi',
          correta: false
        },
        {
          id: 1.4,
          texto: 'Retículo endoplasmático',
          correta: false
        }
      ]
    },
    {
      id: 2,
      pergunta: '<p>O que é mitose?</p>',
      img: 'https://storage.googleapis.com/novo-blog-wordpress/2018/12/mitose-imagem-destaque-768x320.jpg',
      respostas: [
        {
          id: 2.1,
          texto: 'A divisão do citoplasma',
          correta: false
        },
        {
          id: 2.2,
          texto: 'A divisão do núcleo celular',
          correta: true
        },
        {
          id: 2.3,
          texto: 'A síntese de proteínas',
          correta: false
        },
        {
          id: 2.4,
          texto: 'A produção de energia',
          correta: false
        }
      ]
    },
    {
      id: 3,
      pergunta: '<p>Qual é a função dos cromossomos?</p>',
      img: 'https://www.estudopratico.com.br/wp-content/uploads/2013/12/cromossomos.jpg',
      respostas: [
        {
          id: 3.1,
          texto: ' Armazenar informações genéticas',
          correta: true
        },
        {
          id: 3.2,
          texto: 'Controlar o metabolismo celular',
          correta: false
        },
        {
          id: 3.3,
          texto: 'Realizar a fotossíntese',
          correta: false
        },
        {
          id: 3.4,
          texto: 'Armazenar energia',
          correta: false
        }
      ]
    },
    {
      id: 4,
      pergunta: '<p> Qual é a principal função dos glóbulos vermelhos no sangue?</p>',
      img: 'https://www.sofis.com.br/wp-content/uploads/2016/05/hemacia-1024x640.png',
      respostas: [
        {
          id: 4.1,
          texto: 'Transportar dióxido de carbono dos tecidos do corpo para os pulmões',
          correta: false
        },
        {
          id: 4.2,
          texto: 'Transportar oxigênio para os tecidos do corpo',
          correta: true
        },
        {
          id: 4.3,
          texto: 'Combater infecções e doenças',
          correta: true
        },
        {
          id: 4.4,
          texto: 'Coagular o sangue em caso de lesões ou ferimentos',
          correta: false
        }
      ]
    },
    {
      id: 5,
      pergunta: '<p>Qual a função dos leucócitos no sangue? </p>',
      img: 'http://sauderiomafra.com.br/wp-content/uploads/2023/04/Leucopenia-sintomas-e-causas-768x432.jpg',
      respostas: [
        {
          id: 5.1,
          texto: 'Produzir insulina para regular os níveis de açúcar no sangue',
          correta: false
        },
        {
          id: 5.2,
          texto: 'Transportar oxigênio para as células do corpo',
          correta: true
        },
        {
          id: 5.3,
          texto: 'Controlar a coagulação do sangue',
          correta: false
        },
        {
          id: 5.4,
          texto: 'Combater infecções e doenças',
          correta: true
        }
      ]
    },
    {
      id: 6,
      pergunta: '<p>Qual das seguintes alternativas melhor descreve a função da proteína prion e como sua conformação anormal pode levar a doenças neurodegenerativas em mamíferos? </p>',
      img: 'https://static.mundoeducacao.uol.com.br/mundoeducacao/2023/02/ilustracao-de-duas-proteinas-cerebrais-uma-normal-e-uma-com-menos-dobras-essa-versao-anormal-e-denominada-prion.jpg',
      respostas: [
        {
          id: 6.1,
          texto: 'Atua como uma enzima digestiva para quebrar proteínas celulares danificadas, e sua conformação anormal pode levar à formação de agregados proteicos que prejudicam a função celular',
          correta: false
        },
        {
          id: 6.2,
          texto: 'Causa doenças neurodegenerativas em mamíferos quando assume uma conformação anormal e induz outras proteínas a adotarem essa mesma conformação anormal, e essa propagação de proteínas anormais pode levar à formação de placas e emaranhados que prejudicam a função cerebral.',
          correta: true
        },
        {
          id: 6.3,
          texto: 'Desempenha um papel importante no sistema imunológico, reconhecendo e destruindo invasores estrangeiros, e sua conformação anormal pode levar à ativação de células imunológicas e inflamação crônica.',
          correta: true
        },
        {
          id: 6.4,
          texto: 'Auxilia no transporte de íons através da membrana plasmática, e sua conformação anormal pode interferir na função da membrana e prejudicar a homeostase celular.',
          correta: false
        }
      ]
    },
    {
      id: 7,
      pergunta: '<p> Além de sua função principal de modificação, classificação e transporte de proteínas e lipídios, o complexo de Golgi também tem outras funções importantes na célula. Qual das seguintes afirmações sobre as funções do complexo de Golgi é verdadeira? </p>',
      img: 'https://static.mundoeducacao.uol.com.br/mundoeducacao/2019/10/complexo-golgiense.jpg',
      respostas: [
        {
          id: 7.1,
          texto: 'O complexo de Golgi é responsável pela produção de ATP.',
          correta: false
        },
        {
          id: 7.2,
          texto: 'O complexo de Golgi é responsável pela síntese de fosfolipídios.',
          correta: false
        },
        {
          id: 7.3,
          texto: 'O complexo de Golgi está envolvido na síntese de carboidratos',
          correta: true
        },
        {
          id: 7.4,
          texto: 'O complexo de Golgi é essencial para a divisão celular e formação do fuso mitótico.',
          correta: false
        }
      ]
    },
    {
      id: 8,
      pergunta: '<p>Caso tivesse a capacidade de identificar uma única hemácia do sangue de uma pessoa enquanto ela circula por um capilar sanguíneo no pé, seguisse seu caminho pelo corpo e observasse sua passagem por uma série de locais, a sequência seria como: </p>',
      img: 'https://static.biologianet.com/conteudo/images/as-hemacias-tambem-sao-chamadas-globulos-vermelhos-540f557188d27.jpg',
      respostas: [
        {
          id: 8.1,
          texto: 'artérias ⇒ veias ⇒ coração ⇒ artérias ⇒ pulmão ⇒ veias ⇒ capilares.',
          correta: false
        },
        {
          id: 8.2,
          texto: 'veias ⇒ pulmão ⇒ artérias ⇒ coração ⇒ veias ⇒ pulmão ⇒ artérias ⇒ capilares.',
          correta: false
        },
        {
          id: 8.3,
          texto: 'artérias ⇒ coração ⇒ veias ⇒ pulmão ⇒ veias ⇒ coração ⇒ artérias ⇒ capilares.',
          correta: false
        },
        {
          id: 8.4,
          texto: 'veias ⇒ coração ⇒ artérias ⇒ pulmão ⇒ veias ⇒ coração ⇒ artérias ⇒ capilares.',
          correta: true
        }
      ]
    },
    {
      id: 9,
      pergunta: '<p>Em relação à AIDS, temos as afirmações seguintes: </p> <p> I. A doença chamada AIDS é ocasionada por um vírus; </p> <p> II. Sendo que a principal forma de contágio é por meio da transfusão de sangue contaminado, contato sexual com pessoas portadoras do vírus e compartilhamento de agulhas por usuários de drogas injetáveis; </p> <p> III. A convivência com um portador da doença, seja em casa, no trabalho, na escola ou na rua, não representa risco de transmissão da doença, exceto em circunstâncias específicas; </p> <p> IV. O vírus da AIDS ataca o sistema imunológico, prejudicando a capacidade do organismo de combater outras infecções e doenças. </p> <p> Considerando os conhecimentos atuais, assinale a alternativa:</p>',
      img: 'https://www.telavita.com.br/blog/wp-content/uploads/2019/02/diferenca-de-hiv-e-aids.jpg',
      respostas: [
        {
          id: 9.1,
          texto: ' se I, II, III e IV são corretas',
          correta: true
        },
        {
          id: 9.2,
          texto: 'se apenas I, III e IV são corretas',
          correta: false
        },
        {
          id: 9.3,
          texto: 'se apenas I, II e IV são corretas',
          correta: false
        },
        {
          id: 9.4,
          texto: 'se apenas I e III são corretas',
          correta: false
        }
      ]
    },
    {
      id: 10,
      pergunta: '<p>A reprodução assexuada em animais pode ocorrer por diferentes processos. Na maioria dos cnidários, por exemplo, ocorre a brotamento, em que novos indivíduos são formados a partir do corpo do adulto. Em alguns cnidários, como as anêmonas-do-mar, a reprodução assexuada também pode ocorrer por cissiparidade, em que o corpo do animal é dividido em duas partes, cada uma dando origem a um novo indivíduo. Esses novos indivíduos são geneticamente: </p>',
      img: 'https://static.escolakids.uol.com.br/image/reproducao1.jpg',
      respostas: [
        {
          id: 10.1,
          texto: ' Iguais entre si e iguais ao indivíduo progenitor',
          correta: false
        },
        {
          id: 10.2,
          texto: 'Diferentes entre si e iguais ao indivíduo progenitor',
          correta: false
        },
        {
          id: 10.3,
          texto: 'Iguais entre si e diferentes do indivíduo progenitor',
          correta: false
        },
        {
          id: 10.4,
          texto: 'Diferentes entre si e diferentes do indivíduo progenitor',
          correta: true
        }
      ]
    },
    {
      id: 11,
      pergunta: '<p> A distrofia muscular Duchenne (DMD) é uma doença causada por uma mutação em um gene localizado no cromossomo X. Pesquisadores estudaram uma família na qual gêmeas monozigóticas eram portadoras de um alelo mutante recessivo para esse gene (heterozigóticas). O interessante é que uma das gêmeas apresentava o fenótipo relacionado ao alelo mutante, isto é, DMD, enquanto a sua irmã apresentava fenótipo normal.</p>',
      img: 'https://movimentoduchenne.com.br/wp-content/uploads/2020/08/Ilustraciones_DDM_Ok-04-3.png',
      respostas: [
        {
          id: 11.1,
          texto: 'Dominância incompleta do alelo mutante em relação ao alelo normal.',
          correta: false
        },
        {
          id: 11.2,
          texto: 'Inativação aleatória de um dos cromossomos X em fase posterior à divisão que resulta nos dois embriões.',
          correta: true
        },
        {
          id: 11.3,
          texto: 'Falha na separação dos cromossomos X no momento da separação dos dois embriões.',
          correta: false
        },
        {
          id: 11.4,
          texto: 'Origem paterna do cromossomo portador do alelo mutante em uma das gêmeas e origem materna na outra.',
          correta: false
        }
      ]
    },
    {
      id: 12,
      pergunta: '<p>A talidomida é um sedativo leve e foi muito utilizado no tratamento de náuseas, comuns no inı́cio da gravidez. Quando foi lançada, era considerada segura para o uso de grávidas, sendo administrada como uma mistura racêmica composta pelos seus dois enantiômeros (R e S). Entretanto, não se sabia, na época, que o enantiômero S leva à malformação congênita, afetando principalmente o desenvolvimento normal dos braços e pernas do bebê. </p> <p>Essa malformação congênita ocorre porque esses enantiômeros </p>',
      img: 'https://www.blogs.unicamp.br/quimikinha/wp-content/uploads/sites/86/2020/09/xxxxxxxx-1024x550.png',
      respostas: [
        {
          id: 12.1,
          texto: 'Reagem entre si',
          correta: false
        },
        {
          id: 12.2,
          texto: 'Interagem de maneira distinta com o organismo',
          correta: true
        },
        {
          id: 12.3,
          texto: 'Não podem ser separados',
          correta: false
        },
        {
          id: 12.4,
          texto: 'São estruturas com diferentes grupos funcionais',
          correta: false
        }
      ]
    },
    {
      id: 13,
      pergunta: '<p>Os vegetais biossintetizam determinadas substâncias (por exemplo, alcaloides e flavonoides), cuja estrutura quı́mica e concentração variam num mesmo organismo em diferentes épocas do ano e estágios de desenvolvimento. Muitas dessas substâncias são produzidas para a adaptação do organismo às variações ambientais (radiação UV, temperatura, parasitas, herbı́voros, estı́mulo a polinizadores etc.) ou fisiológicas (crescimento, envelhecimento etc.). </p> <p>As variações qualitativa e quantitativa na produção dessas substâncias durante um ano são possı́veis porque o material genético do indivı́duo</p>',
      img: 'https://cdn.pixabay.com/photo/2014/04/07/16/51/leaves-318743_1280.jpg',
      respostas: [
        {
          id: 13.1,
          texto: 'Sofre constantes recombinações para adaptar-se.',
          correta: false
        },
        {
          id: 13.2,
          texto: 'Muda ao longo do ano e em diferentes fases da vida',
          correta: false
        },
        {
          id: 13.3,
          texto: 'Cria novos genes para biossı́ntese de substâncias especı́ficas',
          correta: false
        },
        {
          id: 13.4,
          texto: 'Possui genes transcritos diferentemente de acordo com cada necessidade ',
          correta: true
        }
      ]
    },
    {
      id: 14,
      pergunta: '<p>A polinização, que viabiliza o transporte do grão de pólen de uma planta até o estigma de outra, pode ser realizada biótica ou abioticamente. Nos processos abióticos, as plantas dependem de fatores como o vento e a água.</p> <p>A estratégia evolutiva que resulta em polinização mais eficiente quando esta depende do vento é o(a): </p>',
      img: 'https://static.escolakids.uol.com.br/2022/05/ilustracao-polinizacao-abelha.jpg',
      respostas: [
        {
          id: 14.1,
          texto: 'Aumento do número de estames',
          correta: true
        },
        {
          id: 14.2,
          texto: 'Disponibilização do néctar',
          correta: false
        },
        {
          id: 14.3,
          texto: 'Diminuição do cálice',
          correta: false
        },
        {
          id: 14.4,
          texto: 'Intensificação da cor das pétalas',
          correta: false
        }
      ]
    },
    {
      id: 15,
      pergunta: '<p>Um estudante relatou que o mapeamento do DNA da cevada foi quase todo concluído e seu código genético foi desvendado. Chamou a atenção para o número de genes que compõem esse código genético e que a semente da cevada, apesar de pequena, possui um genoma mais complexo que o humano, sendo boa parte desse código constituída de sequências repetidas. Nesse contexto, o conceito de código genético está abordado de forma equivocada.</p> <p>Cientificamente esse conceito é definido como:</p>',
      img: 'https://uploads.metropoles.com/wp-content/uploads/2019/01/11162006/134.jpeg',
      respostas: [
        {
          id: 15.1,
          texto: 'Localização de todos os genes encontrados em um genoma',
          correta: false
        },
        {
          id: 15.2,
          texto: 'Codificação de sequências repetidas presentes em um genoma',
          correta: false
        },
        {
          id: 15.3,
          texto: 'Trincas de nucleotídeos que codificam os aminoácidos',
          correta: true
        },
        {
          id: 15.4,
          texto: 'Todas as sequências de pares de bases presentes em um organismo',
          correta: false
        }
      ]
    }
  ]
  
  function getQuestaoPorId(id) {
      return questoes.find(q => q.id === id)
  }
  
  export { questoes, getQuestaoPorId }
  