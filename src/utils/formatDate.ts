import moment from 'moment';

export const formatDate = (date: string) => {
   return moment(date, 'YYYY-MM-DD HH:mm:ss').format('DD MMMM YYYY HH:mm')
}