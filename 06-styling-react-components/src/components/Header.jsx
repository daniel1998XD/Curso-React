import logo from "../assets/logo.png";

export default function Header() {
  return (
    <header className="flex flex-col items-center mt-8 mb-8 md:mb-16">
      <img
        src={logo}
        alt="A canvas"
        className="object-contain mb-8 w-44 h-44"
      />
      <h1 className="text-xl font-semibold tracking-widest text-center uppercase text-amber-800 font-title md:text-4xl">
        {/* tudo que está antes do 'md:' vai configurar todo o contexto, as coisas depois do 'md:' vão configurar o 
        componente quando a tela ficar maior que aquilo, logo, tudo que está depois do 'md:' vai sobreescrever as 
        configurações passadas, e se você não mudar nada, ele apenas herda as configurações
        o 'md:' é apenas um exemplo, existem varios tamanhos com siglas diferentes, sempre o maior mais para direita */}
        ReactArt
      </h1>
      <p className="text-stone-500">A community of artists and art-lovers.</p>
    </header>
  );
}
