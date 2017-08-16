using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using myApp.Data;


namespace myApp.Admin.Business
{
    public class DbContextHelper
    {
        public static  myAppModelContainer GetDbContext()
        {
            return new myAppModelContainer();
        }
    }
}
