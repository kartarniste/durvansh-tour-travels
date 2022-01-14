import View from "../../../component/view/View";
import SectionView from "../../../component/view/SectionView";
import logo  from "../../../image/logo.png";

function CompanyInfo(){
    return(
        <View className="vbox componyInfo">
            <SectionView className="hbox">
                  <View className="vbox logoCls">
                    <img src={logo} className="App-logo-custom" alt="logo" />
                    <span>Email: durvanshtours111@gmail.com</span>
                  </View>  

                  <View className="vbox">
                    <ul className="CompanyAddressCls">
                        <li><span>Add. Kharbi Road</span></li>
                        <li><span>Sankalp Nagar</span></li>
                        <li><span>Nagpur-440024</span></li>
                        <li><span>Mob. No. 8830834138</span></li>
                        <li><span className="secondaryMobileCls">8412960494</span></li>
                    </ul>
                  </View>  

            </SectionView>

            <SectionView className="hbox travelTagLineCls">
                <span>FOR ROUND THE CLOCK EFFICIENT TRAVEL SERVICES</span>
            </SectionView>

        </View>
    );
}

export default CompanyInfo;