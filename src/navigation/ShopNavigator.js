import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryBreadScreen from "../screens/CategoryBreadScreen";
import BreadDetailsScreen from "../screens/BreadDetailsScreen";
import CategoryFacturasScreen from "../screens/CategoryFacturasScreen";
import FacturasDetailScreen from "../screens/FacturasDetailScreen";
import CategoryPostresScreen from "../screens/CategoryPostresScreen";
import PostresDetailScreen from "../screens/PostresDetailScreen";
import { Colors } from "../constants/colors";

const Stack = createNativeStackNavigator();

export default ShopNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Categorias" screenOptions={{
            headerStyle: { backgroundColor: Colors.secondary },
            headerTintColor: Colors.primary,
            headerTitleStyle: { fontWeight: 'bold' }
        }}>
            <Stack.Screen
                name='Categorias'
                component={CategoriesScreen}
                options={{
                    title: 'Panaderia',
                }} />
            <Stack.Screen
                name='Pan'
                component={CategoryBreadScreen}
                options={({ route }) => ({ title: route.params.name })} />
            <Stack.Screen
                name='Detalle'
                component={BreadDetailsScreen}
                options={({ route }) => ({ title: route.params.name })} />
            <Stack.Screen name='Facturas' component={CategoryFacturasScreen} />
            <Stack.Screen name='DetalleFacturas' component={FacturasDetailScreen} />
            <Stack.Screen name='Tortas y Postres' component={CategoryPostresScreen} />
            <Stack.Screen name='DetalleTortasyPostres' component={PostresDetailScreen} />
        </Stack.Navigator>
    )
}
