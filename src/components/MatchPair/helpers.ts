import LIS from "assets/images/flags/logo_8982001.png";
import LON from "assets/images/flags/logo_8982002.png";
import ATH from "assets/images/flags/logo_8982003.png";
import VIE from "assets/images/flags/logo_8982004.png";
import MOS from "assets/images/flags/logo_8982005.png";
import ZAG from "assets/images/flags/logo_8982006.png";
import AMS from "assets/images/flags/logo_8982007.png";
import BER from "assets/images/flags/logo_8982008.png";
import COP from "assets/images/flags/logo_8982009.png";
import MAD from "assets/images/flags/logo_8982010.png";
import ANK from "assets/images/flags/logo_8982011.png";
import PAR from "assets/images/flags/logo_8982012.png";
import ROM from "assets/images/flags/logo_8982013.png";
import KIE from "assets/images/flags/logo_8982014.png";
import PRA from "assets/images/flags/logo_8982015.png";
import BRN from "assets/images/flags/logo_8982016.png";

export const getTeamFlag = (teamNameShort: string) => {
  switch (teamNameShort) {
    case "LIS":
      return LIS;
    case "LON":
      return LON;
    case "ATH":
      return ATH;
    case "VIE":
      return VIE;
    case "MOS":
      return MOS;
    case "ZAG":
      return ZAG;
    case "AMS":
      return AMS;
    case "BER":
      return BER;
    case "COP":
      return COP;
    case "MAD":
      return MAD;
    case "ANK":
      return ANK;
    case "PAR":
      return PAR;
    case "ROM":
      return ROM;
    case "KIE":
      return KIE;
    case "PRA":
      return PRA;
    case "BRN":
      return BRN;
  }
};
