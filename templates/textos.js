import React from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';

export default function textos() {
  return (
    <View style={styles.conteudoCentral}>
    <Text style={styles.titulo}>Titulo da história</Text>
    <Text style={styles.explicacao}>Lorem ipsum mattis himenaeos euismod sed aenean dictum semper gravida varius
     sodales, massa fames dictumst aliquam cursus molestie sodales ipsum dui sem. sollicitudin sociosqu sodales 
     amet ut ullamcorper primis velit et mattis erat malesuada fermentum libero, fusce eget leo litora ullamcorper
      iaculis ultrices aenean fringilla vulputate molestie. aenean in lacus tellus lectus facilisis, aliquam
       consectetur euismod pulvinar scelerisque, ultrices porttitor class rhoncus. netus pellentesque cras
        pulvinar tortor imperdiet luctus amet, et himenaeos in purus et senectus lobortis, hac facilisis 
        sagittis ac inceptos dolor. justo dictum donec mattis taciti curae curabitur tristique odio est ornare, 
        amet habitant phasellus aenean amet quisque suspendisse venenatis integer commodo class, varius condimentum
         class felis diam morbi faucibus placerat ante. 
    {"\n"}
    Feugiat elementum nisi facilisis vestibulum libero curabitur, suscipit fermentum nec elementum odio non, 
    aenean bibendum ligula cursus maecenas. senectus litora proin ut eu euismod libero nunc, dictumst ultrices
     sem risus conubia. ligula morbi ac nullam id proin donec tincidunt sociosqu hac ut, viverra suscipit dolor
      molestie phasellus odio donec diam metus praesent elit, consequat etiam himenaeos ipsum ullamcorper non 
      euismod gravida lectus. est rhoncus luctus vitae suscipit ultrices aptent augue egestas massa habitasse 
      dictum, aliquet mauris sapien varius mauris dictumst posuere conubia ullamcorper ac et bibendum, at porta
       hendrerit ipsum auctor praesent curabitur libero lacus nec. 
    {"\n"}
    Ultricies varius ornare platea bibendum aliquet eros sapien est, arcu est suspendisse at morbi malesuada 
    nibh neque, molestie tempor vivamus purus arcu aptent senectus. proin malesuada inceptos quis lobortis 
    sem phasellus odio habitant cubilia, donec massa lorem metus curae pellentesque tristique aptent, sociosqu
     felis leo ullamcorper eget fames ultrices libero. hac tincidunt suspendisse luctus ipsum duis phasellus 
     in quis, quisque justo mauris magna lacinia erat felis, accumsan sodales integer aptent potenti fermentum
      blandit. habitant eu sagittis justo amet aliquet lobortis ligula curabitur, semper hac tellus ut fermentum
       risus felis, magna volutpat commodo sed eleifend class iaculis. 
    {"\n"}
    </Text>
    <Image source={require('../assets/imagens/pinguim.png')} style={styles.imagem}/>
    <Text style={styles.explicacao}>TUllamcorper litora vivamus laoreet a ultrices quis ultricies congue nullam
     libero, platea senectus venenatis arcu proin sed ante accumsan orci donec taciti, condimentum duis torquent
      vel interdum pulvinar aliquet litora tempus. tortor ligula non ut mattis donec consequat amet hac, platea
       pharetra purus massa dui enim morbi at, cubilia habitasse aliquam posuere ullamcorper tempus gravida. 
       orci at nulla nam quisque odio donec iaculis venenatis cubilia mattis mauris, ut lorem etiam at felis 
       blandit purus conubia netus feugiat, a luctus nullam proin dictumst ac orci vehicula ac bibendum. 
       feugiat auctor consequat a pharetra odio commodo feugiat consequat erat dui augue pellentesque laoreet, 
       donec etiam phasellus senectus ornare non fusce venenatis lorem convallis erat. 
    </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  conteudoCentral:{
    flex: 1,
    height:100,
    padding:5,
    backgroundColor: '#fafad2',
    alignItems: 'center',
  },
  titulo:{
    padding: 25,
  },
  explicacao:{
    textAlign: 'justify',  
    letterSpacing: 3,
  },
  imagem:{
    height: 50,
    width: 50,
  }
});
