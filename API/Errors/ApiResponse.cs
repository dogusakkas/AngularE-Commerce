using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Errors
{
    public class ApiResponse
    {

        public ApiResponse(int statusCode, string message = null)
        {
            this.StatusCode = statusCode;
            this.Message = message ?? GetDefaultMessageForStatusCode(statusCode);
        }

        
        public int StatusCode { get; set; }
        public string Message { get; set; }


        private string GetDefaultMessageForStatusCode(int statusCode)
        {
            string errorMessage = string.Empty;
            switch (statusCode)
            {
                case 400:
                    errorMessage = "A Bad request! - Kötü Bir İstekte Bulundunuz!";
                    break;
                case 401:
                    errorMessage = "Authorized Error - Yetkilendirme Hatası!";
                    break;
                case 404:
                    errorMessage = "Resource Not Found - Böyle Bir Sayfa Yok";
                    break;
                case 500:
                    errorMessage = "Server Error - Server Hatası";
                    break;


            }
            return errorMessage;
        }
    }
}
