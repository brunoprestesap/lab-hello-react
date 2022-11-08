import FeatureOne from "./FeatureOne";
import FeatureTwo from "./FeatureTwo";
import FeatureTree from "./FeatureTree";
import FeatureFour from "./FeatureFour";

function Features(){
    return (
        <div className="features-panel">
            <FeatureOne/>
            <FeatureTwo/>
            <FeatureTree/>
            <FeatureFour/>
        </div>
    );
}

export default Features;