import React,{Component} from 'react';
import{View,StyleSheet,Text,TextInput,Button,Switch, TouchableOpacity,Image,ScrollView} from 'react-native';
import Slider from '@react-native-community/slider';
import {Picker, Piker} from '@react-native-picker/picker';
class App extends Component{

  constructor(props){
      super(props);
      this.state={
      nome:'',
      idade:'',
      completo:'',
      estudante:false,
      sexo:0,
      sexos:[
        {key:1,sex:'Feminino'},
        {key:2,sex:'Masculino'},
        {key:3,sex:'Outro'}
      
      ],
      limite:0,
      Texto:'',
      mostrar:0
      
        
      
    };
    this.entrar = this.entrar.bind(this);
  };
  entrar(){
    if(this.state.nome === ''||this.state.idade === ''|| this.state.sexos[this.state.sexo].sex>0){
      alert('Extem campos vazios!');
      return;
    }
    this.setState({mostrar:1});
      //this.setState({idade:this.state.idade});
    

  }

  render(){
    let sexoItem = this.state.sexos.map((v,k)=>//map percorre array de objetos
    {
        return <Picker.Item key={k} value={k} label={v.sex}/>
    })

    return(
      <View style={styles.container}>
        <Image 
          source={require('./src/porquinho.png')}
          
          style={styles.imagem}
        />
        
        <Text style={styles.banco}>BANCO</Text> 

        {(this.state.mostrar)?
            <View style={styles.resultado}>
            <Text style={styles.textoInicial}>Confira seus dados:</Text>
            <Text style={styles.texto} >
               Nome: {this.state.nome} {'\n'}
               Idade: {this.state.idade}{'\n'}
               Sexo: {this.state.sexos[this.state.sexo].sex}{'\n'}
               Estudante: {this.state.estudante} {'\n'}
               Limite: {this.state.limite.toFixed(2)}
            </Text>
           </View>
        :
        <View style={styles.containerCadastro}>
        
        
        <Text style={styles.titulo}>Nome:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu nome"
          onChangeText={ (name) => this.setState({nome: name}) }
        />

        <Text style={styles.titulo}>Idade:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite Sua idade"
          onChangeText={ (age) => this.setState({idade: age}) }
        />

        <Text style={styles.titulo}>Sexo:</Text>

        <Picker
          style={styles.picker}
          selectedValue={this.state.sexo}//onde começa
          onValueChange={(intemValue,itemIndex)=> this.setState({sexo:intemValue})}
        >
          {sexoItem}
        </Picker>

    
        <Text style={styles.titulo}>Estudante:</Text>
        <Switch
          value={this.state.estudante}
          onValueChange={(valorSwitch)=> this.setState({estudante:valorSwitch})}
        />

        <Text style={styles.titulo}>Limite:</Text>
        <Slider
          style={styles.picker}
          minimumValue={50}
          maximumValue={(this.state.estudante)?1000:900}
          onValueChange={(valorSelecionado)=> this.setState({limite:valorSelecionado})}
          value={this.state.limite}
        />

        
        <TouchableOpacity style={styles.button} onPress={this.entrar}>
          <Text style={styles.abrir}> Abrir conta </Text>
        </TouchableOpacity>
        </View> 

          }
                         
        
     </View>
    );
  }
}
export default App;
 const styles =StyleSheet.create({
    container:{
      flex:1,/*paga tamanho todo da tela*/
      marginTop:20,
      backgroundColor:'#70009e'
      

    },
    imagem:{
      width:65,
      height:65,
      alignSelf:'center',
      marginTop:10

    },
    containerCadastro:{

      marginHorizontal:20,
      paddingHorizontal:20,
      paddingTop:30,
      backgroundColor:'#FFF',
      borderRadius:8,
     
      marginBottom:10,

    },
    banco:{
      fontFamily:'Baloo2-ExtraBold',
      textAlign:'center',
      fontSize:26,
      color:'#FFBF00'

    },
    cadastro:{
      textAlign:'center',
      fontFamily:'Baloo2-Medium',
      color:'#70009e',
      fontSize:25,
      marginTop:4,
      marginBottom:5
    },
    titulo:{
      marginLeft:10,
      fontSize:16,
      color:'#70009e',
      fontWeight:'bold',
      fontFamily:'Baloo2-Regular'

      

    },
    input:{ 
      
      alignItems:'center',
      borderWidth:0,
      borderColor:'#70009e',
      borderRadius:100,
      marginBottom:10,
    },
    texto:{
      
      alignSelf:'center',
      fontSize:16,
      color:'#70009e',
      fontWeight:'bold',
      fontFamily:'Baloo2-Regular',
      marginBottom:25

    },
    button:{
      alignItems: 'center',
      color:'#FFBF00',
      backgroundColor: '#70009e',
      padding: 10,
      marginHorizontal:50,
      borderRadius:100,
      marginBottom:17
    },
    picker:{
      fontSize:16,
      marginBottom:10,
      color:'#70009e',
      fontWeight:'bold',
      marginTop:10,
      
    },
    abrir:{
      color: '#FFBF00',
      fontFamily:'Baloo2-ExtraBold',
      fontSize:20
    },
    textoInicial:{
      alignSelf:'center',
      fontSize:20,
      color:'#70009e',
      fontWeight:'bold',
      fontFamily:'Baloo2-Regular'

    },
    resultado:{
      marginHorizontal:20,
      paddingHorizontal:20,
      paddingTop:30,
      backgroundColor:'#FFF',
      borderRadius:8,
     
      marginBottom:10,

    }

 });

