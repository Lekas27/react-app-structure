import { MapPin } from "lucide-react";

export const MapSection = () => {
  return (
    <section className="py-16 bg-linear-to-b from-emerald-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Visit Our Office
          </h2>
          <p className="text-xl text-gray-600">
            Located in the heart of Denver, Colorado - the gateway to adventure
          </p>
        </div>

        <div className="bg-linear-to-br from-emerald-400 to-teal-500 rounded-2xl overflow-hidden shadow-2xl h-96 flex items-center justify-center">
          <div className="text-center text-white p-8">
            <MapPin className="h-24 w-24 mx-auto mb-4" />
            <h3 className="text-3xl font-bold mb-2">WildCamp Headquarters</h3>
            <p className="text-xl text-emerald-50 mb-4">123 Adventure Lane</p>
            <p className="text-lg text-emerald-50">Denver, Colorado 80202</p>
          </div>
        </div>
      </div>
    </section>
  );
};
