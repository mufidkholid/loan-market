"use client";
import { dummyNotifications } from "@/lib/data";

const NotificationList = () => {
  return (
    <div className="space-y-4">
      <div className="pb-2">
        <h3 className="text-lg font-semibold text-gray-900">NOTIFICATION</h3>
      </div>

      <div className="relative">
        <div className="absolute left-[calc(56px+16px+5px)] top-0 bottom-0 w-0.5 bg-gray-300"></div>

        {dummyNotifications.map((notif, index) => {
          const messageParts = notif.message.split(" - ");
          const name = messageParts[0];
          const typeAndSystem = messageParts[1] || "";

          const circleColor = index % 2 === 0 ? "#17A9E2" : "#646567";

          return (
            <div key={notif.id} className="flex items-start gap-4 relative pb-6 last:pb-0">
              <div className="w-14 text-right pt-0.5">
                <span className="text-xs text-gray-500">{notif.time}</span>
              </div>

              <div className="relative z-10 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full border-2 border-white" style={{ backgroundColor: circleColor }}></div>
              </div>

              <div className="flex-1">
                <div className="text-sm">
                  <span className="font-medium text-gray-900">{name}</span>
                  {typeAndSystem && <span className="text-gray-600"> - {typeAndSystem}</span>}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NotificationList;
