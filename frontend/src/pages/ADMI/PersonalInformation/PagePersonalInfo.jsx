import AccountAuthInfo from "../../../components/PersonalAdminInfo/AccountAuthInfo";
import LocationInfo from "../../../components/PersonalAdminInfo/LocationInfo";
import MenuAdmin from "../../../components/PersonalAdminInfo/MenuAdmin";
import PersonalAdminInfo from "../../../components/PersonalAdminInfo/PersonalAdminInfo";

const PersonalPageAdminInfo = () => {
    return (
        <>
            <div className="container-sm p-5 mt-5 bg-white rounded-3 border">
                <div className="col">
                    <p className="text-center fs-4 fw-bold">Informacion Personal</p>
                    <div className="row">
                        <div className="col-md-3">
                            <MenuAdmin />
                        </div>
                        <div className="col-sm-9">
                            <AccountAuthInfo />
                            <PersonalAdminInfo />
                            <LocationInfo />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PersonalPageAdminInfo;