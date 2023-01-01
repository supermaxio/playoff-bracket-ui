
import CardinalsIcon from '../../images/icons/ARI.svg';
import FalconsIcon from '../../images/icons/ATL.svg';
import RavensIcon from '../../images/icons/BAL.svg';
import BillsIcon from '../../images/icons/BUF.svg';
import PanthersIcon from '../../images/icons/CAR.svg';
import BearsIcon from '../../images/icons/CHI.svg';
import BengalsIcon from '../../images/icons/CIN.svg';
import BrownsIcon from '../../images/icons/CLE.svg';
import CowboysIcon from '../../images/icons/DAL.svg';
import BroncosIcon from '../../images/icons/DEN.svg';
import LionsIcon from '../../images/icons/DET.svg';
import PackersIcon from '../../images/icons/GB.svg';
import TexansIcon from '../../images/icons/HOU.svg';
import ColtsIcon from '../../images/icons/IND.svg';
import JaguarsIcon from '../../images/icons/JAX.svg';
import ChiefsIcon from '../../images/icons/KC.svg';
import RamsIcon from '../../images/icons/LA.svg';
import ChargersIcon from '../../images/icons/LAC.svg';
import RaidersIcon from '../../images/icons/LV.svg';
import DolphinsIcon from '../../images/icons/MIA.svg';
import VikingsIcon from '../../images/icons/MIN.svg';
import PatriotsIcon from '../../images/icons/NE.svg';
import SaintsIcon from '../../images/icons/NO.svg';
import GiantsIcon from '../../images/icons/NYG.svg';
import JetsIcon from '../../images/icons/NYJ.svg';
import EaglesIcon from '../../images/icons/PHI.svg';
import SteelersIcon from '../../images/icons/PIT.svg';
import SeahawksIcon from '../../images/icons/SEA.svg';
import FortyNinersIcon from '../../images/icons/SF.svg';
import BuccaneersIcon from '../../images/icons/TB.svg';
import TitansIcon from '../../images/icons/TEN.svg';
import CommandersIcon from '../../images/icons/WAS.svg';

const CARDINALS = "Cardinals";
const FALCONS = "Falcons";
const RAVENS = "Ravens";
const BILLS = "Bills";
const PANTHERS = "Panthers";
const BEARS = "Bears";
const BENGALS = "Bengals";
const BROWNS = "Browns";
const COWBOYS = "Cowboys";
const BRONCOS = "Broncos";
const LIONS = "Lions";
const PACKERS = "Packers";
const TEXANS = "Texans";
const COLTS = "Colts";
const JAGUARS = "Jaguars";
const CHIEFS = "Chiefs";
const RAMS = "Rams";
const CHARGERS = "Chargers";
const RAIDERS = "Raiders";
const DOLPHINS = "Dolphins";
const VIKINGS = "Vikings";
const PATRIOTS = "Patriots";
const SAINTS = "Saints";
const GIANTS = "Giants";
const JETS = "Jets";
const EAGLES = "Eagles";
const STEELERS = "Steelers";
const SEAHAWKS = "Seahawks";
const FORTYNINERS = "FortyNiners";
const BUCCANEERS = "Buccaneers";
const TITANS = "Titans";
const COMMANDERS = "Commanders";

export const GetIcon = (teamName: string) => {
    switch (teamName) {
        case CARDINALS: return CardinalsIcon;
        case FALCONS: return FalconsIcon;
        case RAVENS: return RavensIcon;
        case BILLS: return BillsIcon;
        case PANTHERS: return PanthersIcon;
        case BEARS: return BearsIcon;
        case BENGALS: return BengalsIcon;
        case BROWNS: return BrownsIcon;
        case COWBOYS: return CowboysIcon;
        case BRONCOS: return BroncosIcon;
        case LIONS: return LionsIcon;
        case PACKERS: return PackersIcon;
        case TEXANS: return TexansIcon;
        case COLTS: return ColtsIcon;
        case JAGUARS: return JaguarsIcon;
        case CHIEFS: return ChiefsIcon;
        case RAMS: return RamsIcon;
        case CHARGERS: return ChargersIcon;
        case RAIDERS: return RaidersIcon;
        case DOLPHINS: return DolphinsIcon;
        case VIKINGS: return VikingsIcon;
        case PATRIOTS: return PatriotsIcon;
        case SAINTS: return SaintsIcon;
        case GIANTS: return GiantsIcon;
        case JETS: return JetsIcon;
        case EAGLES: return EaglesIcon;
        case STEELERS: return SteelersIcon;
        case SEAHAWKS: return SeahawksIcon;
        case FORTYNINERS: return FortyNinersIcon;
        case BUCCANEERS: return BuccaneersIcon;
        case TITANS: return TitansIcon;
        case COMMANDERS: return CommandersIcon;
        default:
            return "";
    }
};

export const GetEmoji = (teamName: string) => {
    switch (teamName) {
        case CARDINALS: return "🐦";
        case FALCONS: return "🕊";
        case RAVENS: return "";
        case BILLS: return "";
        case PANTHERS: return "";
        case BEARS: return "";
        case BENGALS: return "";
        case BROWNS: return "";
        case COWBOYS: return "";
        case BRONCOS: return "";
        case LIONS: return "";
        case PACKERS: return "";
        case TEXANS: return "";
        case COLTS: return "";
        case JAGUARS: return "";
        case CHIEFS: return "";
        case RAMS: return "";
        case CHARGERS: return "";
        case RAIDERS: return "";
        case DOLPHINS: return "";
        case VIKINGS: return "";
        case PATRIOTS: return "";
        case SAINTS: return "";
        case GIANTS: return "";
        case JETS: return "";
        case EAGLES: return "";
        case STEELERS: return "";
        case SEAHAWKS: return "";
        case FORTYNINERS: return "";
        case BUCCANEERS: return "";
        case TITANS: return "";
        case COMMANDERS: return "";
        default:
            return "";
    }
};
export default GetIcon;


