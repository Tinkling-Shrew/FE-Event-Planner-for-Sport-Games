import "./Map.css";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { useState, React } from "react";

export const mainClass = "Map";

const containerStyle = { width: "400px", height: "400px" };

const center = { lat: -3.745, lng: "-38.523" };

const Map = () => {
	const { isLoaded } = useJsApiLoader({
		id: "-google-map-script",
		googleMapsApiKey: "AIzaSyD8Yo_fB7roZmh7lt0S1xfETDR7dTRPfDk",
	});

	const [map, setMap] = useState(null);

	const onLoad = React.useCallback(function callback(map) {
		const bounds = new window.google.maps.LatLngBounds(center);
		map.fitBounds(bounds);
		setMap(map);
	}, []);

	const onUnmount = React.useCallback(function callback(map) {
		setMap(null);
	}, []);

	return isLoaded ? (
		<GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10} onLoad={onLoad} onUnmount={onUnmount}>
			<></>
		</GoogleMap>
	) : (
		<></>
	);
};

export default Map;
