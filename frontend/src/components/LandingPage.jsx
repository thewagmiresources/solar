import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { 
  Sun, 
  Zap, 
  Shield, 
  Clock, 
  Star,
  Phone,
  Mail,
  MapPin,
  FileText,
  Home,
  Calculator,
  Wrench,
  Banknote,
  TrendingUp,
  Target,
  Gift,
  CheckCircle,
  Users,
  Award,
  ArrowRight
} from 'lucide-react';
import { packages, testimonials, faqs, workingSteps, whyChoosePoints } from '../mock';
import { useToast } from '../hooks/use-toast';

const LandingPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission
    toast({
      title: "Sebut Harga Dihantar!",
      description: "Terima kasih! Kami akan hubungi anda dalam 24 jam.",
    });
    setFormData({
      name: '',
      address: '',
      phone: '',
      email: '',
      message: ''
    });
  };

  const getIcon = (iconName) => {
    const icons = {
      FileText, Home, Calculator, Wrench, Banknote, TrendingUp, Target, Gift
    };
    const IconComponent = icons[iconName];
    return IconComponent ? <IconComponent className="h-8 w-8" /> : <Sun className="h-8 w-8" />;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Sun className="h-8 w-8 text-solar-yellow" />
              <h1 className="text-2xl font-bold text-gray-900">Ai Brique</h1>
            </div>
            <Button className="bg-solar-yellow hover:bg-solar-yellow/90 text-black font-semibold">
              <Phone className="h-4 w-4 mr-2" />
              Hubungi Kami
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-solar-yellow/10 to-eco-green/10 py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Buat Apa Nak Membazir <span className="text-solar-yellow">Ribuan Ringgit</span> pada Bil Elektrik?
                </h1>
                <p className="text-xl text-gray-700 leading-relaxed">
                  Jangan biarkan kenaikan tarif TNB membebankan keluarga anda – pasang panel solar terbukti dan jimat hingga <span className="font-bold text-eco-green">70%</span> dalam masa 14 hari sahaja, dengan jaminan 25 tahun.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-solar-yellow hover:bg-solar-yellow/90 text-black font-bold text-lg px-8 py-4">
                  <Zap className="h-5 w-5 mr-2" />
                  Dapatkan Sebut Harga Percuma Hari Ini!
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-white font-semibold">
                  <Phone className="h-5 w-5 mr-2" />
                  Call Now
                </Button>
              </div>

              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-eco-green" />
                  <span>Pemasangan 14 Hari</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-electric-blue" />
                  <span>Jaminan 25 Tahun</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-solar-yellow" />
                  <span>100+ Pemasangan Berjaya</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=400&fit=crop" 
                alt="Solar Panel Installation"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg border-l-4 border-eco-green">
                <p className="text-2xl font-bold text-eco-green">70% Jimat</p>
                <p className="text-gray-600">Bil Elektrik Bulanan</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Solar Now Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Kenapa Tidak Tunggu Lagi? Pasang Solar <span className="text-eco-green">Sebelum Terlambat!</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {whyChoosePoints.map((point) => (
              <Card key={point.id} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-gradient-to-br from-solar-yellow/20 to-eco-green/20 rounded-full flex items-center justify-center mb-4">
                    {getIcon(point.icon)}
                  </div>
                  <CardTitle className="text-xl text-gray-900">{point.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center leading-relaxed">{point.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Bagaimana <span className="text-electric-blue">Ia Berfungsi?</span>
            </h2>
            <p className="text-xl text-gray-600">Proses mudah dalam 5 langkah sahaja</p>
          </div>

          <div className="relative">
            <div className="grid md:grid-cols-5 gap-8">
              {workingSteps.map((step, index) => (
                <div key={step.id} className="relative">
                  <Card className="border-2 border-gray-200 hover:border-solar-yellow transition-all duration-300 bg-white">
                    <CardHeader className="text-center">
                      <div className="mx-auto w-16 h-16 bg-gradient-to-br from-solar-yellow to-eco-green rounded-full flex items-center justify-center text-white font-bold text-lg mb-4">
                        {step.id}
                      </div>
                      <CardTitle className="text-lg text-gray-900">{step.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-center text-sm leading-relaxed">{step.description}</p>
                    </CardContent>
                  </Card>
                  
                  {index < workingSteps.length - 1 && (
                    <ArrowRight className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 h-8 w-8 text-solar-yellow z-10" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Pilih <span className="text-solar-yellow">Pakej Terbaik</span> Untuk Rumah Anda
            </h2>
            <p className="text-xl text-gray-600">Pakej lengkap dengan jaminan dan sokongan penuh</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <Card key={pkg.id} className={`relative overflow-hidden transition-all duration-300 hover:scale-105 ${pkg.popular ? 'ring-4 ring-solar-yellow shadow-2xl' : 'shadow-lg'} bg-white`}>
                {pkg.popular && (
                  <Badge className="absolute top-4 right-4 bg-solar-yellow text-black font-bold">
                    POPULAR
                  </Badge>
                )}
                
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl text-gray-900 mb-2">{pkg.name}</CardTitle>
                  <div className="text-4xl font-bold text-electric-blue mb-2">{pkg.price}</div>
                  <p className="text-gray-600">{pkg.power}</p>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Shield className="h-5 w-5 text-eco-green" />
                      <span className="text-gray-700">Jaminan {pkg.warranty}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Home className="h-5 w-5 text-electric-blue" />
                      <span className="text-gray-700">{pkg.suitableFor}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-5 w-5 text-solar-yellow" />
                      <span className="text-gray-700">Pemasangan 14 Hari</span>
                    </div>
                  </div>
                  
                  <Button className="w-full bg-solar-yellow hover:bg-solar-yellow/90 text-black font-semibold">
                    Pilih Pakej Ini
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-electric-blue hover:bg-electric-blue/90 text-white font-bold px-8">
              Bandingkan & Mohon Tawaran Eksklusif Sekarang
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Apa Kata <span className="text-eco-green">Pelanggan Kami?</span>
            </h2>
            <p className="text-xl text-gray-600">100+ pemasangan berjaya di Malaysia – terbukti!</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-gray-600 text-sm flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-solar-yellow text-solar-yellow" />
                    ))}
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-gray-700 leading-relaxed mb-4">"{testimonial.comment}"</p>
                  
                  <div className="bg-eco-green/10 p-4 rounded-lg">
                    <p className="text-center">
                      <span className="text-red-500 line-through font-semibold">{testimonial.beforeBill}</span>
                      <ArrowRight className="inline mx-2 h-4 w-4" />
                      <span className="text-eco-green font-bold">{testimonial.afterBill}</span>
                    </p>
                    <p className="text-center text-sm text-gray-600 mt-1">Bil bulanan</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Soalan <span className="text-electric-blue">Lazim</span>
            </h2>
            <p className="text-xl text-gray-600">Jawapan kepada soalan yang selalu ditanya</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq) => (
                <AccordionItem key={faq.id} value={`item-${faq.id}`} className="bg-white border border-gray-200 rounded-lg px-6">
                  <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:text-electric-blue">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 leading-relaxed pt-2">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="py-20 bg-gradient-to-br from-electric-blue/10 to-solar-yellow/10">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Mohon Sebut Harga dan <span className="text-solar-yellow">Jimat Bil Elektrik</span> Anda Sekarang
            </h2>
            <p className="text-xl text-gray-600">Isi maklumat anda dan dapatkan sebut harga percuma dalam 24 jam</p>
          </div>

          <Card className="max-w-2xl mx-auto shadow-2xl border-none bg-white">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nama Penuh *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleFormChange}
                      required
                      className="border-2 focus:border-solar-yellow"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Nombor Telefon *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleFormChange}
                      required
                      className="border-2 focus:border-solar-yellow"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    className="border-2 focus:border-solar-yellow"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Alamat/Poskod *</Label>
                  <Input
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleFormChange}
                    required
                    className="border-2 focus:border-solar-yellow"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Mesej Tambahan</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleFormChange}
                    rows={4}
                    className="border-2 focus:border-solar-yellow"
                    placeholder="Beritahu kami tentang keperluan anda..."
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-solar-yellow hover:bg-solar-yellow/90 text-black font-bold text-lg py-4"
                >
                  <Zap className="h-5 w-5 mr-2" />
                  Hantar Permohonan Sebut Harga Percuma
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Sun className="h-8 w-8 text-solar-yellow" />
                <h3 className="text-2xl font-bold">Ai Brique</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Pembekal panel solar terkemuka di Malaysia dengan 100+ pemasangan berjaya dan jaminan 25 tahun.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Perkhidmatan</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Pemasangan Panel Solar</li>
                <li>Penyelenggaraan & Servis</li>
                <li>Konsultasi Percuma</li>
                <li>Jaminan & Waranti</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Kawasan Liputan</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Kuala Lumpur</li>
                <li>Selangor</li>
                <li>Petaling Jaya</li>
                <li>Shah Alam</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Hubungi Kami</h4>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-solar-yellow" />
                  <span>+60 3-1234 5678</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-solar-yellow" />
                  <span>info@aibrique.my</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-solar-yellow" />
                  <span>Kuala Lumpur, Malaysia</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Ai Brique. Hak cipta terpelihara.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;