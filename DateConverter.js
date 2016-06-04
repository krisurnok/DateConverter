

function DC()
{
	var _dc=this;
	_dc.SetDate=SetDate;
	
	function SetDate(date,seperator)
	{
		try {
			return (date.getFullYear()+seperator+(date.getMonth()+1)+seperator+date.getDate());
		}
		catch(err) {
			console.log(err);
			return null;
		}
		
	}
	
}