interface IDate {
  date: string;
  timezone: {
    timezone_type: number;
    timezone: string;
  };
}

export default IDate;
