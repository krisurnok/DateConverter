

function DC()
{
	var _dc=this;
	_dc.DateAsString=DateAsString;
	_dc.IsValidDate=IsValidDate;
	
	
	function DateAsString(date,seperator)
	{
		try {
			return (date.getFullYear()+seperator+(date.getMonth()+1)+seperator+date.getDate());
		}
		catch(err) {
			console.log(err);
			return null;
		}
		
	}
	
	  function IsValidDate(date, format) {
        
		try{
			// format D(D)/M(M)/(YY)YY
			var dateCheck =  date ;
			var v = ''; for (i = 0; i < new String(dateCheck).length; i++) { if (dateCheck.charCodeAt(i) != 8206) { v = v + dateCheck[i]; } }
			var dateFormat = /^\d{1,4}[\.|\/|-]\d{1,2}[\.|\/|-]\d{1,4}$/;
			var date = v;
			if (dateFormat.test(date)) {
				// remove any leading zeros from date values
				date = date.replace(/0*(\d*)/gi, "$1");
				var formatArray = format.split(/[\.|\/|-]/);
				var dateArray = date.split(/[\.|\/|-]/);
				var DateSeperater = date.match(/[\.|\/|-]/);

				var FormatSeperater = format.match(/[\.|\/|-]/);
				var FormatSeperaterCount = format.split(FormatSeperater[0]).length - 1;
				var DateSeperaterCount = date.split(FormatSeperater[0]).length - 1;
				if (DateSeperater.length > 0 && FormatSeperater.length > 0) {
					if (FormatSeperaterCount == DateSeperaterCount && (formatArray[0].length <= dateArray[0].length || dateArray[0].length <= formatArray[0].length) && (formatArray[1].length <= dateArray[1].length || dateArray[1].length <= formatArray[1].length) && (formatArray[2].length <= dateArray[2].length || dateArray[2].length <= formatArray[2].length)) {
						//do stuff

						var valid = true;

						var MonthIndex = formatArray[0].match(/M/gi) ? 0 : formatArray[1].match(/M/gi) ? 1 : 2;
						var DateIndex = formatArray[0].match(/d/gi) ? 0 : formatArray[1].match(/d/gi) ? 1 : 2;
						var YearIndex = formatArray[0].match(/y/gi) ? 0 : formatArray[1].match(/y/gi) ? 1 : 2;

						var month = parseInt(dateArray[MonthIndex]);
						var day = parseInt(dateArray[DateIndex]);
						var year = parseInt(dateArray[YearIndex]);

						if (formatArray[YearIndex].length != dateArray[YearIndex].length) {
							return false;
						}

						if ((month < 1) || (month > 12)) {
							valid = false;
						}
						else if ((day < 1) || (day > 31)) {
							valid = false;
						}
						else if (((month == 4) || (month == 6) || (month == 9) || (month == 7) || (month == 11)) && (day > 30)) {
							valid = false;
						}
						else if (((month == 2) && ((((year % 4) == 0) && ((year % 100) == 0) && ((year % 400) != 0)) || ((year % 4) != 0)) && (day > 28))) {
							valid = false;
						}
						else if (((month == 2) && ((((year % 4) == 0) && ((year % 100) == 0) && ((year % 400) == 0)) || ((year % 100) != 0)) && (day > 29))) {
							valid = false;
						}

						return valid;
					}
					else {
						return false;
					}
				}
				else {
					return false;
				}

			} else {
				return false;
			}
			
		}
		catch(err)
		{
			console.log(err);
			return false;
			
		}

    }

	
}