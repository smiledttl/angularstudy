using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Newtonsoft.Json;


namespace myApp.Admin.Web.Common
{
    public class JsonStringResult:ActionResult
    {
        public object Data { get; set; }
        public JsonStringResult()
        {

        }

        public JsonStringResult(object data)
        {
            this.Data = data;
        }
        public override void ExecuteResult(ControllerContext context)
        {
            HttpResponseBase response = context.HttpContext.Response;

            if(this.Data!=null)
            {
                string jsonResult;
                response.ContentType = "application/json";
                jsonResult = JsonConvert.SerializeObject(this.Data);
                response.Write(jsonResult);
            }
        }
    }
}