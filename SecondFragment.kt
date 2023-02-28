package com.example.turtletracker

import androidx.fragment.app.Fragment

class SecondFragment : Fragment() {
    private var binding: FragmentSecondBinding? = null
    fun onCreateView(
            inflater: LayoutInflater?, container: ViewGroup?,
            savedInstanceState: Bundle?
    ): View {
        binding = FragmentSecondBinding.inflate(inflater, container, false)
        return binding.getRoot()
    }

    fun onViewCreated(@NonNull view: View?, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)
        binding.buttonSecond.setOnClickListener(object : View.OnClickListener {
            override fun onClick(view: View) {
                NavHostFragment.findNavController(this@SecondFragment)
                        .navigate(R.id.action_SecondFragment_to_FirstFragment)
            }
        })
    }

    fun onDestroyView() {
        super.onDestroyView()
        binding = null
    }
}