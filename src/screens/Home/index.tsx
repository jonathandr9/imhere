import { Text, View, TextInput, TouchableOpacity, FlatList, Alert} from "react-native"
import { styles } from './styles'
import { Participant } from "../../components/Participant";

//os componentes sempre tem letra maiuscula
//A extensão do arquivo de componente tem que ser sempre .tsx

export function Home() {

  const participants = ['Jonathan', 'Gabriela', 'João', 'Mike', 'Jonelson', 'Julismandro', 'Manel', 'Janine', 'Zé', 'Neco', 'Maria', 'Tico', 'Juslio']

  function handleParticipantAdd() {

    if(participants.includes('Jonathan')){
      return Alert.alert("Participante Existe!","Já existe um participante na lista com esse nome");
    }
  }

  function handleParticipantRemove(name: string) {
    Alert.alert(
      "Remover", 
      `Deseja remover o participante ${name}?`, [
      {
        text: 'Sim',
        onPress: () => Alert.alert("Deletado!")
      },
      {
        text: 'Não',
        style: 'cancel'        
      }
    ]);    
  }


  return (
    //A tag vazia(fragment) é porque a função não pode retornar mais  de um elemento    
    <View style={styles.container}>

      <Text key="1" style={styles.eventName}>
        Nome do Evento
      </Text>

      <Text style={styles.eventDate}>
        Sexta,  4 de novembro de 2022.
      </Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do Participante"
          placeholderTextColor="#6b6b6b"
        // keyboardType="numeric"
        />

        <TouchableOpacity
          style={styles.button}
          onPress={handleParticipantAdd}
        >

          <Text style={styles.buttonText}>
            +
          </Text>

        </TouchableOpacity>

      </View>

        {/* com scroll view */}
        {/* showsVerticalScrollIndicator={false} */}
        {/* {
          participants.map(participant => (

          ))
        } */}

      <FlatList
        data={participants}
        keyExtractor={item => item}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.ListEmptyText}>
            Ninguém chegou no evento ainda? Adicione participantes a sua lista de presença;
          </Text>
        )}
        renderItem={({item}) =>(

          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />

        )}
      />
      
      

    </View>
  );
}