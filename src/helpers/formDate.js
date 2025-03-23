import { formatDistanceToNow } from 'date-fns';
import { format } from 'date-fns'


export const formatDistance = (date) => { return formatDistanceToNow(new Date(date), { addSuffix: true }); };
export const formateDate = (date) => { return format(new Date(date), "Pp") }