import LoginRoutes from '../modules/login/route/LoginRoutes'
import DashboardRoutes from '../modules/dashboard/route/DashboardRoutes'
import NotFoundRoutes from '../modules/notfound/route/NotFoundRoutes'
import LeadConversionRoutes from '../modules/leadconversion/route/LeadConversionRoutes'
import EventRoutes from '../modules/events/route/EventRoutes'
import SchoolRoutes from '../modules/schools/route/SchoolRoutes'
import SelfKnowRoutes from '../modules/selfKnows/route/SelfKnowRoutes'
import PartnerRoutes from '../modules/partners/route/PartnerRoutes'
import StudentRoutes from '../modules/students/route/StudentRoutes'

export default [
    ...LoginRoutes,
    ...DashboardRoutes,
    ...LeadConversionRoutes,
    ...EventRoutes,
    ...NotFoundRoutes,
    ...SchoolRoutes,
    ...SelfKnowRoutes,
    ...PartnerRoutes,
    ...StudentRoutes
];
