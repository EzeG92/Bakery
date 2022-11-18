import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryBreadScreen from "../screens/CategoryBreadScreen";
import BreadDetailsScreen from "../screens/BreadDetailsScreen";
import CategoryFacturasScreen from "../screens/CategoryFacturasScreen";
import FacturasDetailScreen from "../screens/FacturasDetailScreen";
import CategoryPostresScreen from "../screens/CategoryPostresScreen";
import PostresDetailScreen from "../screens/PostresDetailScreen";

const Stack = createNativeStackNavigator();

export default ShopNavigator = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Categorias' component={CategoriesScreen}/>
                <Stack.Screen name='Pan' component={CategoryBreadScreen}/>
                <Stack.Screen name='Detalle' component={BreadDetailsScreen}/>
                <Stack.Screen name='Facturas' component={CategoryFacturasScreen}/>
                <Stack.Screen name='DetalleFacturas' component={FacturasDetailScreen}/>
                <Stack.Screen name='Tortas y Postres' component={CategoryPostresScreen}/>
                <Stack.Screen name='DetalleTortasyPostres' component={PostresDetailScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
