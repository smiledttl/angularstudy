using myApp.Admin.Business.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Web;
using System.Web.Mvc;
using System.Web.Script.Serialization;

namespace myApp.Admin.Web.Controllers
{
    public class HomeController : BaseSrvController
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        [HttpPost]
        public ActionResult Save()
        {
            var sr = new StreamReader(Request.InputStream);
            var stream = sr.ReadToEnd();
            JavaScriptSerializer js = new JavaScriptSerializer();
            var list = js.Deserialize<List<mySelectListItem>>(stream);
            StringBuilder sbOut = new StringBuilder();
            if (list.Any())
            {
                foreach (var item in list)
                {
                    sbOut.AppendFormat("id:{0},name:{1}<br />", item.id.ToString(), item.name);
                }
            }
            //ViewBag.oupMessage = sbOut;
            //return View();
            return ToJson(list);
        }
    }
}