# Miscellaneous Notes

## Dealing with Types

Python uses what's known as `duck-typing` to understand a value passed in.  Unlike Java, that requires an explicit declaration:

  public String function getGraduationDateToString(Calendar yourGraduationDate)
  {
    String gradString = String.valueOf(yourGraduation.YEAR);
    return gradString;
  }

Python will not check what type of object gets passed in.  There are ways to create `Interfaces` in Python,
but they are generally rare.  Equivalent Python:

  def get_graduation_date_to_string(yourGraduation)
    return str(yourGraduation.YEAR)

So long as a method exists or property exists, Python will invoke it.  The term `duck-typing` means so long as
whatever is passed to the method has the method or property the function is invoking,
Python will not raise an error.

We do not have to specify that we are expecting an object of type Calendar, but we
do have to explicitly cast it as a string using `str` to get the correct value back.

If there is no `YEAR` property on the object passed in, Python will throw an error, or raise an exception to use Python's terminology.

The equivalent JavaScript:

  function getGraduationDateToString(yourGraduation) {
    return String(yourGraduation.YEAR);
  }

JavaScript will not throw an error and will return `"undefined"` as a string.
