import './content.css'
import HeaderBar from './headerbar'
import ChatContent from './ChatContent/chatcontent';
import CalenderContent from './CalenderContent/calendercontent';
import PropertiesContent from './PropertiesContent/propertiescontent';
import SettingContent from './SettingContent/settingcontent';
import OfferContent from './OffersContent/offercontent'
import DocumentContent from './DocumentsContent/documentcontent'

function Content({ selectedCategory }) {
    // console.log(selectedCategory);
    switch (selectedCategory) {
        case 1:
            return (<div className="content">
                <HeaderBar />
                <PropertiesContent />
            </div>);
        case 2:
            return (<div className="content">
                <HeaderBar />
                <ChatContent />
            </div>);
        case 3:
            return (<div className="content">
                <HeaderBar />
                <CalenderContent />
            </div>);
        case 4:
            return (<div className="content">
                <HeaderBar />
                <OfferContent />
            </div>);
        case 5:
            return (<div className="content">
                <HeaderBar />
                <DocumentContent />
            </div>);
        case 6:
            return (<div className="content">
                <HeaderBar />
                <SettingContent />
            </div>);
        default:
            return (<div className="content">
                <HeaderBar />
                <ChatContent />
            </div>);
    }
}

export default Content;