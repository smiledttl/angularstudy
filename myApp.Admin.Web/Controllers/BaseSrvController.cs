using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Mvc;
using myApp.Admin.Web.Common;
namespace myApp.Admin.Web.Controllers
{
    public class BaseSrvController : Controller
    {
        public BaseSrvController()
        {

        }

        public JsonStringResult ToJson(object data)
        {
            return new JsonStringResult(data);
        }
    }
}
