import ImageTree from "./ImageTree";

function FeatureTree(){
    return (
        <div className="feature">
            <ImageTree/>
            <h3>Single-Way</h3>
            <p>A set of immutable values are passed to the components.</p>
        </div>
    );
}

export default FeatureTree;