import { View } from 'react-native'
import { TextInput, Button } from 'react-native-paper';
import { useFormik } from 'formik';
import Toast from 'react-native-root-toast';
import { globalStyles } from '../../Styles/styleIndex'; 

export function loginForm() {
  return (
    <View>
      <TextInput 
      label="correo electronico" 
      style={globalStyles.form.input} 
      autoCapitalize='none'/>
      <TextInput 
      label="contraseña"  
      style={globalStyles.form.input} 
      secureTextEntry/>
      <Button 
      mode="container"
      style={globalStyles.form.btnSubmit}> Comenzar </Button>
      <Button
       mode="text"
       style={globalStyles.form.btnText}
       labelStyle={globalStyles.form.btnTextLabel}>
        Registrarse </Button>
      </View>

  )
}